# Recursos de terceiros

A licença MIT na raiz cobre o código e a documentação originais deste projeto.
Recursos e dependências de terceiros mantêm seus próprios termos. A licença do
projeto não concede direitos sobre marcas ou logotipos da Microsoft.

## Fluent 2 — Microsoft Fluent UI System Icons

Os ícones de sistema em `assets/icons/fluent/<tamanho>/<variante>/` foram obtidos do projeto
[Microsoft Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons).
A licença MIT e o aviso de copyright originais estão preservados em
[assets/icons/fluent/LICENSE](assets/icons/fluent/LICENSE).

Esta é a coleção indicada nas [diretrizes de iconografia do Fluent 2](https://fluent2.microsoft.design/iconography).
Todos os SVGs da árvore `assets/` da revisão oficial fixada estão incluídos,
com variantes regular, filled, light e color, tamanhos e versões localizadas.
Os SVGs oficiais não foram alterados; a coloração dos monocromáticos pode ser
aplicada em memória na renderização. O recurso local preexistente
`20/regular/chevron-right.svg` foi preservado e é identificado separadamente no inventário.
A origem está registrada em
[assets/icons/fluent/SOURCE.md](assets/icons/fluent/SOURCE.md), com revisão
fixada, URLs e checksums em [manifest.json](assets/icons/fluent/manifest.json).

## Product launch icons e file type icons

`assets/icons/fluent/launch/` e `assets/icons/fluent/files/` contêm recursos
originais SVG e PNG baixados do CDN oficial da Microsoft. Os catálogos públicos,
tamanhos, densidades e lacunas HTTP 404 estão registrados em
[assets/icons/fluent/SOURCE.md](assets/icons/fluent/SOURCE.md) e em `catalogs/`.

A licença MIT dos ícones de sistema não é estendida a esses recursos de marca.
As cores e os arquivos originais foram preservados. Consulte as
[diretrizes de marcas da Microsoft](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks)
e as [orientações de iconografia](https://fluent2.microsoft.design/iconography).

## Marca OneDrive

O arquivo `assets/icons/brands/onedrive.svg` é um recurso de marca obtido no CDN
da Microsoft e preservado sem alterações. A origem está registrada em
[assets/icons/brands/SOURCE.md](assets/icons/brands/SOURCE.md).

Esse arquivo e as marcas presentes nas imagens de conceito não são
relicenciados sob a MIT deste projeto. Consulte as
[diretrizes de marcas da Microsoft](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks).
O Onix Desktop é um projeto independente, sem afiliação oficial com a Microsoft.

## Dependências

PySide6, Qt, PyObjC e demais dependências mantêm suas respectivas licenças.
Elas são instaladas pelo UV e não são incorporadas à licença MIT do código
original do Onix Desktop. Verifique os termos aplicáveis ao preparar uma
distribuição que inclua essas bibliotecas.
