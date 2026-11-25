# Onix Desktop

O Onix Desktop é um projeto de aprendizado de Tauri, Rust, Next.js, React, TypeScript e Tailwind CSS. A interface segue a identidade do protótipo do Onix inspirado na Linear, com temas claro e escuro.

## Como colaborar

- Trate o usuário como aluno e responda em português. Explique o motivo de cada passo e como ele pode conferir o resultado.
- Para perguntas como “como faço?”, “o que eu errei?” e “não funcionou”, inspecione o código e oriente. Aponte o arquivo, componente ou comando relevante, mostre o trecho necessário e diga onde encaixá-lo.
- Edite arquivos somente quando o usuário pedir explicitamente. Depois, explique o que mudou, por que funciona e como reproduzir a verificação.

## Estrutura e estilo

- Use o App Router em `src/app/`. Mantenha componentes exclusivos da rota em `_components/`, componentes reutilizáveis em `src/components/` e primitivos do shadcn/ui em `src/components/ui/`. Organize estado em `src/hooks/` e regras compartilhadas em `src/lib/`. Nomeie arquivos do frontend em kebab-case e estilize os componentes com classes Tailwind no próprio `.tsx`. Centralize os tokens do Onix e os estilos globais em `src/app/globals.css`.
- Use `src-tauri/src/` para catálogo, preferências, operações de arquivo, diálogos nativos e login. O React invoca os comandos pelo cliente `src/lib/tauri/workspace.ts`. Os comandos retornam dados do catálogo sem expor caminhos locais ou tokens.
- Use nomes descritivos, tipos explícitos nas fronteiras e linhas em branco para separar passos. Preserve aparência e comportamento em mudanças de organização. Apresente erros e controles da interface em português.
- Rode `npm run typecheck`, `npm run lint`, `npm run build`, `cargo fmt --manifest-path src-tauri/Cargo.toml -- --check` e `cargo clippy --locked --manifest-path src-tauri/Cargo.toml -- -D warnings`. Confira no app os fluxos de interface quando possível.
- Crie ou reintroduza testes automatizados somente quando o usuário pedir.
