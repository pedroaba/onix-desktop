import { createHash } from 'node:crypto'
import {
  copyFile,
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from 'node:fs/promises'
import path from 'node:path'

import * as t from '@babel/types'
import { transform } from '@svgr/core'
import jsx from '@svgr/plugin-jsx'
import { Linter } from 'eslint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { format } from 'prettier'
import tseslint from 'typescript-eslint'

const linter = new Linter()
const importRules = {
  languageOptions: { parser: tseslint.parser },
  plugins: { 'simple-import-sort': simpleImportSort },
  rules: { 'simple-import-sort/imports': 'error' },
}
const root = process.cwd()
const sourceRoot = path.join(root, 'assets/icons')
const outputRoot = path.join(root, 'src/components/icons')
const stagingRoot = path.join(root, 'node_modules/.cache/onix-icons-generation')
const compare = (a, b) => (a < b ? -1 : a > b ? 1 : 0)
const priority = ['regular', 'color', 'filled', 'light']
const prettier = {
  parser: 'typescript',
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
}
const overrides = new Map([
  ['fluent/20/regular/chevron-right.svg', 'chevron-right-legacy'],
])

function describe(relative) {
  const parts = relative.split('/')
  const filename = parts.pop()
  const extension = path.extname(filename).slice(1)
  const originalName = filename.slice(0, -extension.length - 1)
  const name =
    overrides.get(relative) ?? originalName.replace(/_+/g, '-').toLowerCase()
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name))
    throw Error('Nome inválido: ' + relative)
  let collection
  if (parts[0] === 'brands') collection = 'brands'
  else if (parts[1] === 'launch') collection = 'products'
  else if (parts[1] === 'files') collection = 'files'
  else collection = 'system'
  const start = collection === 'system' ? 1 : 2
  const size = collection === 'brands' ? 16 : Number(parts[start])
  const variant = collection === 'brands' ? 'color' : parts[start + 1]
  const density = parts[start + 2] ?? '1x'
  if (!size || !variant || !/^\d+(?:\.\d+)?x$/.test(density))
    throw Error('Estrutura desconhecida: ' + relative)
  return {
    collection,
    name,
    originalName,
    size,
    variant,
    density,
    format: extension,
    source: 'assets/icons/' + relative,
  }
}

function uniqueIds() {
  return {
    visitor: {
      JSXAttribute(attribute) {
        const value = attribute.node.value
        if (!t.isStringLiteral(value)) return
        const key = attribute.node.name.name
        const text = value.value
        if (key === 'id') {
          attribute.node.value = t.jsxExpressionContainer(
            t.binaryExpression(
              '+',
              t.identifier('iconId'),
              t.stringLiteral('-' + text)
            )
          )
          return
        }
        if (!text.includes('url(#') && !['href', 'xlinkHref'].includes(key))
          return
        const chunks = []
        let from = 0
        for (const match of text.matchAll(/url\(#([^)]+)\)|^#(.+)$/g)) {
          const id = match[1] ?? match[2]
          chunks.push(
            t.stringLiteral(
              text.slice(from, match.index) + (match[1] ? 'url(#' : '#')
            )
          )
          chunks.push(t.identifier('iconId'))
          chunks.push(t.stringLiteral('-' + id + (match[1] ? ')' : '')))
          from = match.index + match[0].length
        }
        if (!chunks.length) return
        chunks.push(t.stringLiteral(text.slice(from)))
        attribute.node.value = t.jsxExpressionContainer(
          chunks.reduce((left, right) => t.binaryExpression('+', left, right))
        )
      },
    },
  }
}

async function svgComponent(entry, content) {
  const hasIds = /\bid=["']/.test(content)
  if (entry.collection === 'system' && entry.variant !== 'color') {
    content = content.replace(
      /\b(fill|stroke)="(?!none\b|currentColor\b|url\()[^"]+"/g,
      '$1="currentColor"'
    )
  }
  return transform(
    content,
    {
      plugins: [jsx],
      typescript: true,
      dimensions: false,
      expandProps: 'end',
      jsx: { babelConfig: { plugins: hasIds ? [uniqueIds] : [] } },
      template(variables) {
        const svgType = t.importSpecifier(
          t.identifier('SVGProps'),
          t.identifier('SVGProps')
        )
        svgType.importKind = 'type'
        const imports = [svgType]
        if (hasIds)
          imports.push(
            t.importSpecifier(t.identifier('useId'), t.identifier('useId'))
          )
        const props = t.identifier('props')
        props.typeAnnotation = t.tsTypeAnnotation(
          t.tsTypeReference(
            t.identifier('SVGProps'),
            t.tsTypeParameterInstantiation([
              t.tsTypeReference(t.identifier('SVGSVGElement')),
            ])
          )
        )
        const body = []
        if (hasIds)
          body.push(
            t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier('iconId'),
                t.callExpression(t.identifier('useId'), [])
              ),
            ])
          )
        body.push(t.returnStatement(variables.jsx))
        const nodes = [
          t.importDeclaration(imports, t.stringLiteral('react')),
          t.exportDefaultDeclaration(
            t.functionDeclaration(
              t.identifier('SvgIcon'),
              [props],
              t.blockStatement(body)
            )
          ),
        ]
        if (hasIds)
          nodes.unshift(t.expressionStatement(t.stringLiteral('use client')))
        return nodes
      },
    },
    { componentName: 'SvgIcon' }
  )
}

async function generate() {
  const paths = (await readdir(sourceRoot, { recursive: true }))
    .filter((name) => /\.(svg|png)$/.test(name))
    .sort(compare)
  const groups = new Map()
  const manifest = []
  for (const relative of paths) {
    const entry = describe(relative)
    const key = entry.collection + '/' + entry.name
    const group = groups.get(key) ?? []
    if (group.some((previous) => previous.originalName !== entry.originalName))
      throw Error('Colisão de nomes: ' + group[0].source + ' e ' + entry.source)
    if (
      group.some(
        (p) =>
          p.size === entry.size &&
          p.variant === entry.variant &&
          p.density === entry.density &&
          p.format === entry.format
      )
    )
      throw Error('Variante duplicada: ' + entry.source)
    group.push(entry)
    groups.set(key, group)
  }
  await rm(stagingRoot, { recursive: true, force: true })
  await mkdir(stagingRoot, { recursive: true })
  try {
    let done = 0
    for (const [key, entries] of groups) {
      const directory = path.join(stagingRoot, key)
      await mkdir(directory, { recursive: true })
      const imports = [
        "import { type IconProps, type IconSource, renderIcon } from '../../icon-source'",
      ]
      const sources = []
      for (const [index, entry] of entries.entries()) {
        const stem = [entry.size, entry.variant, entry.density].join('-')
        const filename = stem + (entry.format === 'svg' ? '.tsx' : '.png')
        const original = await readFile(path.join(root, entry.source))
        if (entry.format === 'svg') {
          await writeFile(
            path.join(directory, filename),
            await format(
              await svgComponent(entry, original.toString()),
              prettier
            )
          )
        } else
          await copyFile(
            path.join(root, entry.source),
            path.join(directory, filename)
          )
        imports.push(
          'import Source' +
            index +
            " from './" +
            (entry.format === 'svg' ? stem : filename) +
            "'"
        )
        sources.push(
          '{ format: ' +
            JSON.stringify(entry.format) +
            ', size: ' +
            entry.size +
            ', variant: ' +
            JSON.stringify(entry.variant) +
            ', density: ' +
            JSON.stringify(entry.density) +
            ', ' +
            (entry.format === 'svg' ? 'component' : 'image') +
            ': Source' +
            index +
            ' }'
        )
        manifest.push({
          ...entry,
          output: 'src/components/icons/' + key + '/' + filename,
          component: 'src/components/icons/' + key + '/index.tsx',
          sha256: createHash('sha256').update(original).digest('hex'),
        })
      }
      const variants = [...new Set(entries.map((e) => e.variant))].sort(
        (a, b) => priority.indexOf(a) - priority.indexOf(b) || compare(a, b)
      )
      const densities = [...new Set(entries.map((e) => e.density))].sort(
        compare
      )
      const formats = [...new Set(entries.map((e) => e.format))].sort(compare)
      const union = (values) =>
        values.map((value) => JSON.stringify(value)).join(' | ')
      let componentName =
        key
          .split('/')
          .at(-1)
          .split('-')
          .map((part) => part[0].toUpperCase() + part.slice(1))
          .join('') + 'Icon'
      if (/^\d/.test(componentName)) componentName = 'Icon' + componentName
      const code =
        linter.verifyAndFix(imports.join('\n'), importRules).output +
        '\n\nconst sources: readonly IconSource[] = [' +
        sources.join(',\n') +
        ']\n\nexport type ' +
        componentName +
        'Props = IconProps<' +
        union(variants) +
        ', ' +
        union(densities) +
        ', ' +
        union(formats) +
        '>\n\nexport default function ' +
        componentName +
        '(props: ' +
        componentName +
        'Props) {\n return renderIcon(sources, props)\n}\n'
      await writeFile(
        path.join(directory, 'index.tsx'),
        await format(code, prettier)
      )
      if (++done % 500 === 0) console.log('Componentes convertidos:', done)
    }
    for (const collection of ['system', 'products', 'files', 'brands']) {
      await rm(path.join(outputRoot, collection), {
        recursive: true,
        force: true,
      })
      await rename(
        path.join(stagingRoot, collection),
        path.join(outputRoot, collection)
      )
    }
    await writeFile(
      path.join(outputRoot, 'manifest.json'),
      JSON.stringify(
        {
          svg: manifest.filter((e) => e.format === 'svg').length,
          png: manifest.filter((e) => e.format === 'png').length,
          components: groups.size,
          entries: manifest,
        },
        null,
        2
      ) + '\n'
    )
    console.log(
      'Catálogo gerado:',
      groups.size,
      'componentes;',
      manifest.length,
      'arquivos de origem.'
    )
  } finally {
    await rm(stagingRoot, { recursive: true, force: true })
  }
}
await generate()
