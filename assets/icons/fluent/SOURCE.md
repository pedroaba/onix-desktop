# Coleções Fluent 2 — inventário completo

Referência: https://fluent2.microsoft.design/iconography

Importação em 02/11/2026. São **27.172 arquivos oficiais de ícones** (SVG e PNG),
mais um recurso local preexistente preservado. O conjunto cobre a árvore SVG completa
da coleção de sistema e todos os nomes dos catálogos públicos de produtos e arquivos
identificados abaixo. Não é uma coleção arbitrária de logotipos de todos os produtos
que a Microsoft já lançou, nem inclui versões históricas de cada desenho.

## Coleções e organização

| Coleção | Local | Arquivos | Abrangência |
| --- | --- | ---: | --- |
| Sistema | `<tamanho>/<variante>/<nome>.svg` | 21.833 | Todos os SVGs de assets/ na revisão oficial fixada; regular, filled, light e color, incluindo versões direcionais e localizadas. |
| Product launch | `launch/<tamanho>/color/<nome>.<svg ou png>` | 338 | Todos os 17 produtos dos dois catálogos oficiais; todos os tamanhos/formatos/densidades consultados e disponíveis no CDN fixado. |
| Tipos de arquivo | `files/<tamanho>/color/<nome>.<svg ou png>` | 5.001 | Todos os 93 nomes do catálogo oficial; tamanhos 16, 20, 24, 32, 40, 48, 64 e 96 e densidades publicadas disponíveis. |
| Recurso local | `20/regular/chevron-right.svg` | 1 | Versão local preexistente mantida sem alteração para preservar as chamadas do aplicativo. |

Tamanhos de sistema: 10, 12, 16, 20, 24, 28, 32 e 48. Nem todo ícone existe
em cada tamanho/variante. Versões direcionais conservam `_ltr`/`_rtl`; localizadas
recebem `__<idioma>`. Colisões entre nomes distintos na origem são preservadas em
arquivos adicionais com sufixo `__alternate_<identificador>`; nenhum SVG foi descartado.

As densidades adicionais dos recursos CDN ficam em subpastas como
`files/48/color/2x/docx.png` e `files/48/color/1.5x/docx.svg`.
Os originais não foram redimensionados, convertidos nem recoloridos.

## Uso com o loader atual

```python
# Sistema: o caminho usado pela sidebar continua válido.
IconLoader("folder", options=IconLoaderOptions(
    folder_name="fluent/20/regular", color="#0067b8"
)).load(20)

# Produto e arquivo: preservar as cores originais (color=None, padrão).
IconLoader("word", options=IconLoaderOptions(
    folder_name="fluent/launch/48/color"
)).load(48)

IconLoader("docx", options=IconLoaderOptions(
    folder_name="fluent/files/48/color"
)).load(48)

# PNG, quando necessário.
IconLoader("docx", options=IconLoaderOptions(
    folder_name="fluent/files/48/color/2x", icon_ext="png"
)).load_as_pixmap(96)
```

O logotipo já usado na conta permanece em `../brands/onedrive.svg`. O importador
não alterou código da interface, temas ou o loader. O `chevron-right.svg` local
difere do `chevron_right.svg` oficial; ambos foram preservados e diferenciados
no manifesto. Somente ícones monocromáticos devem receber coloração em memória.

## Fontes fixadas

- Sistema e catálogo de arquivos: https://github.com/microsoft/fluentui-system-icons
  — revisão `9eb184e96268d3293462f9d9d19225b4c7b07774`.
- Catálogo de produtos e documentação: https://github.com/microsoft/fluentui
  — revisão `2c30d6c658e47a4f5203ddde45604af387b98ce9`.
- Catálogo complementar de produtos: https://github.com/OfficeDev/office-ui-fabric-core
  — revisão `d2df16513baae2b1daa6d560f9c5822b1756d936`.
- CDN de produtos e arquivos: `https://res.cdn.office.net/files/fabric-cdn-prod_20261014.001/assets`.

[manifest.json](manifest.json) lista cada arquivo, coleção, URL de origem e SHA-256.
[catalogs/system-svg-paths.json](catalogs/system-svg-paths.json) contém todos os
21.833 caminhos da árvore original. Os outros catálogos oficiais foram preservados
em `catalogs/`, juntamente com as regras de tamanhos e densidades.

## Disponibilidade no CDN

Das 5.838 combinações de nome/tamanho/formato/densidade consultadas, 5.339 foram
baixadas e 499 retornaram HTTP 404. Não há erro de transporte pendente e nenhum
nome de produto/tipo de arquivo ficou sem representação.

As lacunas são registradas em [catalogs/cdn-unavailable.json](catalogs/cdn-unavailable.json).
[catalogs/cdn-requests.json](catalogs/cdn-requests.json) registra o conjunto completo
consultado. Em particular, 21 PNGs de arquivos na faixa de 64 px em 2x/3x/4x não
são publicados; as outras lacunas são de produtos. Não foram criados substitutos
nem redimensionamentos para preencher essas combinações inexistentes.

Os formatos oficiais empregados pelos catálogos públicos são SVG e PNG.
A página de iconografia também menciona WebP, mas não fornece uma coleção WebP
para download; os endpoints WebP consultados no CDN retornaram 404. Não houve
conversão de SVG/PNG para inventar essa coleção.

## Licenças e marcas

A coleção de sistema tem licença MIT, preservada em [LICENSE](LICENSE), com
[NOTICE](NOTICE). Essa licença não é atribuída aos ícones de produtos e arquivos:
eles são recursos de marca fornecidos pelo CDN da Microsoft, mantidos sem alterações
e sujeitos aos termos de uso e diretrizes de marcas da Microsoft.

- https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks
- https://fluent2.microsoft.design/iconography

## Verificação

Todos os arquivos importados tiveram SHA-256 conferido e foram decodificados com Qt:
QSvgRenderer para SVG e QImageReader para PNG. A cobertura da coleção de sistema
foi comparada com a árvore completa do repositório, incluindo idiomas e nomes
alternativos. Os testes conferem inventário, hashes e cobertura dos catálogos.

Executar na raiz do projeto:

```bash
.venv/bin/python -m unittest discover -s tests -v
```
