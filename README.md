# Onix Desktop

Aplicativo desktop pessoal para visualizar, pesquisar e organizar arquivos em uma interface própria inspirada no OneDrive e no protótipo do Onix. O projeto é também um ambiente de aprendizado de Rust, Tauri, Next.js, React e TypeScript.

O explorador oferece lista e cards, busca rápida, filtros, favoritos e painel de detalhes. Os dados de OneDrive, Google Drive e Dropbox são demonstrativos. Pastas criadas e arquivos locais adicionados duram uma sessão. Tema e favoritos de itens demonstrativos sobrevivem à reinicialização.

## Executar

Instale Node.js 24 ou posterior, pnpm e a toolchain estável do Rust. No macOS, instale também as ferramentas de linha de comando do Xcode. No Windows, o Tauri usa as ferramentas C++ do Visual Studio e o WebView2. Consulte os [pré-requisitos do Tauri](https://v2.tauri.app/start/prerequisites/) para o seu sistema.

Na raiz do projeto:

```sh
pnpm install --frozen-lockfile
pnpm tauri dev
```

O Next.js 16.4.6 serve a interface em `127.0.0.1:1420` durante o desenvolvimento. O build gera uma exportação estática em `out/` que o Tauri inclui no aplicativo. Os comandos Rust e os diálogos nativos são executados pelo app desktop. [Integração do Tauri com Next.js](https://v2.tauri.app/start/frontend/nextjs/)

No Zed, abra a paleta de comandos e procure por **Tasks: Spawn**. As tarefas **Onix** executam o app, verificam o frontend e o Rust ou geram o pacote.

## Onde encontrar o código

| Caminho | Responsabilidade |
| --- | --- |
| `src/app/` | App Router, layout e painéis específicos da janela. |
| `src/components/` | Componentes reutilizáveis do Onix, incluindo o navegador de arquivos e o layout. |
| `src/components/ui/` | Primitivos do shadcn/ui gerados no projeto. |
| `src/hooks/` | Estado do explorador, catálogo e provedores. |
| `src/lib/` | Tipos, consultas, formatação e cliente dos comandos Tauri. |
| `src/app/globals.css` | Tokens dos temas e regras globais do Tailwind. |
| `src-tauri/src/catalog/` | Catálogo em memória, comandos, arquivos locais e dados demonstrativos. |
| `src-tauri/src/settings/` | Preferências, gravação atômica e leitura dos valores legados. |
| `src-tauri/src/auth/` | Sessão, retorno local do navegador e validação da identidade Microsoft. |
| `assets/` | Referências visuais e recursos de terceiros. O Next.js inclui os ícones usados pela interface. |

Ao iniciar, o React chama `initialize_workspace` para receber o catálogo e o tema. Em **Nova pasta**, por exemplo, o formulário envia o nome e o ID da pasta pai. O Rust valida a duplicidade e devolve o item criado. Os caminhos de arquivos locais ficam no Rust. Em caso de sucesso, o React atualiza a lista.

Os temas e favoritos ficam em `settings.json` no diretório de configuração do Tauri. Na primeira execução, o app tenta importar as preferências anteriormente gravadas pelo Qt, sem modificar os dados de origem. O macOS usa `~/Library/Application Support/com.pedroaba.onixdesktop` para as novas preferências.

### Componentes e tema

Os arquivos TypeScript, TSX e CSS do frontend usam kebab-case. Os componentes reutilizáveis ficam em `src/components/` e o código específico de uma rota fica em `_components/` junto à rota. A organização segue a referência [next-saas-rbac](https://github.com/pedroaba/next-saas-rbac/tree/main/apps/web/src).

Os componentes do shadcn/ui ficam em `src/components/ui/` e podem ser incluídos com `pnpm dlx shadcn add <componente>`. Os temas e os tokens do Tailwind ficam em `src/app/globals.css`. Os estilos de cada componente ficam nas classes Tailwind do respectivo `.tsx`. [Instalação e configuração do shadcn/ui](https://ui.shadcn.com/docs/installation/manual)

## Conectar o OneDrive

1. Cadastre um **aplicativo cliente público** para contas Microsoft pessoais no Microsoft Entra. Em **Aplicativos móveis e desktop**, registre `http://localhost` como URI de redirecionamento.
2. Copie `.env.example` para `.env` e preencha `ONEDRIVE_CLIENT_ID` com a ID pública do aplicativo. A autoridade padrão atende contas Microsoft pessoais. Reinicie o app de desenvolvimento ou gere um novo pacote para aplicar a configuração.
3. Abra **Configurações → Conectar** e conclua o fluxo no navegador padrão. O Onix mostra o nome da conta. Para limpar a sessão, clique em **Desconectar** ou feche o aplicativo.

O build lê apenas as duas variáveis públicas documentadas no exemplo. Variáveis de ambiente da execução podem sobrescrever a configuração compilada. O fluxo usa código de autorização com PKCE e redirecionamento local. A listagem via Microsoft Graph, a sincronização e a disponibilidade offline são etapas futuras. [Fluxo de autorização da Microsoft](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow), [redirecionamento local](https://learn.microsoft.com/en-us/entra/identity-platform/reply-url)

## Verificar e empacotar

O ESLint ordena os imports com o `simple-import-sort`. O Prettier segue as opções do RBAC e ordena as classes Tailwind. Para aplicar as correções, rode `pnpm lint:fix` e `pnpm format`. [Configuração do RBAC](https://github.com/pedroaba/next-saas-rbac/tree/main/config)

```sh
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
cargo fmt --manifest-path src-tauri/Cargo.toml -- --check
cargo clippy --locked --manifest-path src-tauri/Cargo.toml -- -D warnings
pnpm tauri build
```

No macOS, abra `src-tauri/target/release/bundle/macos/Onix Desktop.app` para testar o pacote com o servidor de desenvolvimento desligado. No Windows, a configuração gera um instalador NSIS. Build e verificação na plataforma Windows estão pendentes.

Para verificar os fluxos, abra a busca com **⌘F** ou **Ctrl+K**, procure uma pasta, abra-a e volte pelo breadcrumb. Use **Filtrar** para restringir por tipo e provedor e confira a lista e os cards. Em **OneDrive**, crie uma pasta e tente repetir o nome. Adicione uma imagem local com **Enviar arquivos**, veja a prévia em cards e use **Baixar** nos detalhes para salvar uma cópia. Alterne o tema em **Configurações**, marque um item demonstrativo como favorito e reinicie para conferir as preferências.

## Identidade e licença

Projeto independente, sem afiliação oficial com a Microsoft. As imagens de conceito claro e escuro e a coleção Fluent original estão em `assets/`. A [licença MIT](LICENSE) cobre o código e a documentação originais. Os recursos de terceiros mantêm os termos descritos em [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
