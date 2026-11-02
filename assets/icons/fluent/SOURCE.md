# Fluent 2 — ícones de sistema

Diretrizes: https://fluent2.microsoft.design/iconography

A documentação do Fluent 2 aponta para a coleção Microsoft Fluent UI System Icons.
Os SVGs desta pasta são originais, sem alterações; as cores são aplicadas em memória pelo IconLoader.

- Repositório: https://github.com/microsoft/fluentui-system-icons
- Revisão fixada: `9eb184e96268d3293462f9d9d19225b4c7b07774`
- Consulta e download: 02/11/2026
- Variante em uso: regular, com desenho nativo de 20 × 20 px.
- Licença original: [LICENSE](LICENSE).
- Arquivos, URLs imutáveis e checksums: [manifest.json](manifest.json).

## Organização

`<tamanho>/<variante>/<nome>.svg`, por exemplo `20/regular/folder.svg`.
Usar `IconLoaderOptions(folder_name="fluent/20/regular", color="...")`.
Ao adicionar outros tamanhos/variantes nas próximas aulas, obter o SVG correspondente
na mesma revisão ou atualizar o conjunto e registrar a nova revisão no manifesto.
Não guardar cópias recoloridas: o loader aplica uma cor sólida preservando a transparência.

## Ícones em uso

| Nome | Uso |
| --- | --- |
| folder | Minhas pastas |
| clock | Recentes |
| star | Favoritos |
| arrow_sync | Sincronização |
| delete | Lixeira |
| settings | Configurações |
| dark_theme | Alternar tema |

A navegação mantém regular nos estados marcado/desmarcado, como nos conceitos aprovados,
e usa cor para a seleção. Filled é uma variante disponível na coleção, mas não é necessária
neste conjunto. Os logotipos de produto ficam em `../brands/` e mantêm suas cores originais.

As antigas nuvens `cloud_filled.svg` e `cloud_blue.svg` não tinham referências no aplicativo
e foram removidas, assim como as cópias de 24 px substituídas por desenhos nativos de 20 px.
