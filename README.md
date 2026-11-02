# Onix Desktop

Um aplicativo desktop pessoal para trazer à minha máquina uma experiência de navegação semelhante à do **OneDrive na web**: uma janela completa para visualizar, pesquisar e organizar minhas pastas e consultar seus detalhes.

A motivação é ter um lugar próprio para trabalhar com o OneDrive no desktop, além do acesso pelo ícone na bandeja ou barra de menus. O projeto terá interface própria e pretende aproveitar a sincronização do cliente oficial onde isso for adequado.

O aplicativo também é um projeto de aprendizado: está sendo construído em aulas incrementais para estudar **Python, PySide6, Qt Widgets e customização com QSS**, com atenção à organização do código e à manutenção.

## Estado atual

**Protótipo de interface, versão 0.1.0.** A tela usa dados de exemplo; ainda não autentica uma conta Microsoft nem consulta ou modifica o OneDrive real. O nome “Pedro” e os status das pastas são demonstrativos.

O comando “Nova Pasta” adiciona um objeto apenas à memória da aplicação. As pastas criadas nessa demonstração desaparecem ao fechar o app. A preferência de tema é salva localmente.

### Implementado

- Janela principal com barra superior e pesquisa integrada à área de título.
- Barra lateral com identificação de conta, logotipo do OneDrive e seleção exclusiva de navegação.
- Tabela de pastas com nome, status e tamanho, cabeçalhos alinhados à esquerda e seleção por linha.
- Pesquisa por nome com `QSortFilterProxyModel`, preservando os dados originais.
- Estado vazio quando a pesquisa não encontra pastas.
- Painel de detalhes atualizado pela seleção.
- Criação de pastas de exemplo, com validação de nome vazio e duplicidade.
- Temas claro e escuro, alternância em execução e preferência persistida com `QSettings`.
- Integração nativa no macOS para a barra superior e o alinhamento dos controles da janela.
- Ajustes de análise estática para a ponte dinâmica do PyObjC.

Os itens “Recentes”, “Favoritos”, “Sincronização” e “Lixeira” têm seleção visual, mas ainda não possuem páginas e operações próprias. “Configurações” também não abre uma tela. A interface está em aproximação gradual aos conceitos aprovados.

## Direção visual

A referência escolhida é o **design system Microsoft**, adaptado para um gerenciador desktop pessoal: azul Microsoft, superfícies neutras, hierarquia de textos e cantos discretos. No macOS, mantemos os controles nativos da janela.

A fonte possui alternativas locais quando Segoe UI não está instalada. As imagens abaixo são **conceitos aprovados**, não capturas da implementação atual.

### Conceito claro

![Conceito aprovado em tema claro](assets/concept_light.png)

### Conceito escuro

![Conceito aprovado em tema escuro](assets/concept_dark.png)

## Tecnologias

| Tecnologia | Papel |
| --- | --- |
| Python 3.14+ | Linguagem do projeto. |
| UV | Gerenciamento de dependências, ambiente e execução. |
| PySide6 / Qt Widgets | Interface desktop. |
| QSS | Estilos compartilhados e cores dos temas. |
| QSettings | Preferências locais. |
| PyObjC / Cocoa | Integração da janela no macOS; dependência condicional. |
| Microsoft Graph | Integração futura com o OneDrive; ainda não implementada. |

Python foi escolhido pela experiência prévia do autor e pelo objetivo didático. Os exemplos usam PySide6 de forma consistente.

## Executar

Com o UV instalado, abra um terminal na raiz deste repositório:

```bash
uv sync
uv run python main.py
```

A versão de Python está indicada em `.python-version`. Não é necessário ativar manualmente o ambiente `.venv` para usar `uv run`.

Para adicionar dependências, use `uv add nome-do-pacote`. Mantenha `pyproject.toml` e `uv.lock` no controle de versão; o diretório `.venv` é local.

### Plataformas

O objetivo é executar no **macOS e no Windows**. O desenvolvimento e as verificações descritas nesta etapa aconteceram no Mac; o comportamento no Windows ainda precisa de validação na plataforma.

A dependência `pyobjc-framework-cocoa` possui o marcador `sys_platform == 'darwin'`. O adaptador nativo é limitado ao macOS pelo decorator `os_restriction`.

## Organização do código

```text
main.py                         # Inicialização, tema e conexões da aplicação
src/
├── models/
│   └── folder.py                # Dados de uma pasta, sem dependência de Qt
├── services/
│   ├── app_settings.py          # Leitura e gravação da preferência de tema
│   └── onedrive_service.py      # Reservado para a integração futura
├── decorators/
│   └── operational_system_restriction.py
├── platforms/
│   └── macos.py                 # Integração específica com Cocoa
└── ui/
    ├── main_window.py          # Composição das três áreas e da barra superior
    ├── pages/home.py           # Coordenação da página e dos dados de exemplo
    ├── components/             # Sidebar, TitleBar, tabela, detalhes e estado vazio
    └── themes/                 # base.qss, light.qss, dark.qss e carregador
assets/
├── concept_light.png
├── concept_dark.png
└── icons/                      # Ícones e registros de origem
typings/                       # Descrições locais de tipos do AppKit e objc
```

`src` é atualmente um pacote Python: os imports usam `src.ui...`, e a execução parte de `main.py`. O projeto ainda não configura um pacote instalável com um comando próprio.

### Fluxos principais

- **Pesquisa:** `TitleBar` → `MainWindow` → `HomePage` → filtro da `FolderTable`.
- **Detalhes:** `FolderTable.folder_selected` → `HomePage.folder_selected` → `FolderDetails`.
- **Tema:** botão da sidebar → janela → `main.py` → `apply_theme` e `AppSettings`.
- **Estilo:** `base.qss` define formatos e medidas; `light.qss` e `dark.qss` definem as cores.

## Próximas etapas

1. Continuar o acabamento visual conforme os conceitos: ícones da navegação, toolbar, detalhes, tabela e rodapé.
2. Revisar a limpeza da seleção após filtrar: no código atual, ela ainda ocorre antes de atualizar o filtro; a correção discutida deve limpar a seleção e o índice atual depois da filtragem.
3. Implementar as páginas de navegação e as operações locais de interface.
4. Adicionar autenticação de conta Microsoft pessoal e acesso ao Microsoft Graph.
5. Investigar separadamente disponibilidade offline, liberação de espaço e estado real do cliente de sincronização em cada sistema.
6. Validar a experiência no Windows e preparar o empacotamento.

A sincronização real, a persistência de arquivos e a disponibilidade offline ainda são objetivos futuros. Textos como “Sincronizando” na tabela não representam operações em andamento.

## Aulas e documentação

O percurso cobre janela, layouts, QSS, sidebar, modelos e tabela, sinais, detalhes, diálogos, temas, preferências, integração nativa, pesquisa e estado vazio. A etapa atual é o acabamento da barra lateral; os ícones de todos os botões ainda estão pendentes.

Os relatórios individuais das aulas e a explicação detalhada do projeto foram registrados no vault pessoal do Obsidian, em **Projetos/onix-desktop**. A documentação reflete a conversa e a leitura do código em **01/11/2026**; testes relatados em aulas anteriores não foram integralmente reexecutados nesta atualização documental.

## Identidade e recursos

Projeto independente para uso pessoal e estudo, sem afiliação oficial com a Microsoft. O SVG do OneDrive foi obtido no CDN da Microsoft para corresponder ao conceito aprovado. Sua origem está em `assets/icons/brands/SOURCE.md`.

Os recursos de marca estão separados dos ícones de sistema usados pelo Fluent 2.
Todos os 21.833 SVGs de sistema da revisão oficial fixada ficam em
`assets/icons/fluent/<tamanho>/<variante>/`, incluindo regular, filled, light,
color e versões localizadas. O caminho de 20px usado pela sidebar permanece válido.
Os ícones de produtos ficam em `assets/icons/fluent/launch/` (17 produtos,
338 arquivos), e os de arquivos em `assets/icons/fluent/files/` (93 tipos,
5.001 arquivos). Ambos preservam os formatos e densidades disponíveis no CDN.
O loader pode aplicar cor por tema aos monocromáticos em memória; os ícones
multicoloridos e o logotipo OneDrive mantêm as cores originais.
Origem, revisão e licença estão em `assets/icons/fluent/SOURCE.md`; o inventário
com URLs e checksums fica em `assets/icons/fluent/manifest.json`.
Não se atribui ao projeto uma licença para os logotipos da Microsoft.

## Licença

O código e a documentação originais do projeto estão disponíveis sob a
[licença MIT](LICENSE), com copyright de Pedro Augusto Barbosa Aparecido.
Os recursos de terceiros mantêm seus próprios termos, detalhados em
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
