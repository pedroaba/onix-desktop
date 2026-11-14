# Onix Desktop

O Onix Desktop é um projeto de aprendizado de Python 3.15, PySide6, Qt Widgets e QSS. A interface segue o protótipo do FigCraft inspirado no app Linear, com temas claro e escuro.

## Como colaborar

- Trate o usuário como aluno e responda em português. Explique o motivo de cada passo e como ele pode conferir o resultado.
- Quando ele pedir ajuda para entender, criar ou corrigir algo, comece pela orientação. Aponte o arquivo, a classe ou o método relevante, mostre o trecho necessário e diga onde encaixá-lo.
- Pode inspecionar arquivos e diagnosticar o problema. Só edite arquivos ou aplique uma correção quando o usuário pedir explicitamente. Perguntas como “como faço?”, “o que eu errei?” e “não funcionou” pedem orientação.
- Quando a edição for solicitada, aplique a mudança no escopo pedido. Depois, explique o que mudou, por que funciona e como reproduzir a verificação.

## Estrutura do projeto

| Caminho | Responsabilidade |
| --- | --- |
| `main.py` | Inicialização do app e carregamento e persistência da preferência de tema. |
| `src/ui/main_window.py` | Montagem da janela, navegação entre telas e coordenação de sinais. |
| `src/ui/pages/` | Telas e estado de cada fluxo. A tela chama componentes e serviços conforme a necessidade. |
| `src/ui/components/` | Componentes de interface, como sidebar, barra de título, lista, cards e painel de detalhes. Os controles básicos ficam em `primitive/`. |
| `src/ui/dialogs/` | Diálogos, como busca rápida e criação de pasta. |
| `src/ui/styles.py` | Tokens de cor, tipografia, espaçamento, bordas e dimensões. As paletas usam a classe `Color` de `src/ui/themes/utils/color.py`. |
| `src/ui/themes/` | Aplicação dos temas e regras QSS. Use os tokens de `styles.py` para estilizar os componentes. |
| `src/models/`, `src/services/` e `src/data/` | Modelos, regras de consulta, armazenamento, configurações, integrações e dados demonstrativos. |
| `src/utils/`, `src/loaders/` e `src/platforms/` | Utilitários compartilhados, carregamento de recursos e código específico de plataforma. |

## Estilo de código

- Use `src/ui/components/sidebar.py` e o `__init__` de `src/ui/pages/files.py` como exemplos de leitura. Separe por linhas em branco a configuração, a criação dos widgets, a conexão dos sinais e a montagem dos layouts. Mantenha juntas as linhas que fazem parte do mesmo passo.
- Use nomes descritivos, anotações de tipo e múltiplas linhas quando elas tornam a leitura mais clara. Em comentários, registre o motivo de uma decisão quando ele não estiver evidente.
- Reaproveite componentes e funções antes de criar outros. Confira, por exemplo, `WorkspaceButton`, `IconButton`, `StyledLabel`, `get_default_layout`, `create_qmargins` e `IconLoader`.
- Separe por responsabilidade. Mantenha componentes reutilizáveis fora das telas e preserve a estrutura dos módulos existentes ao refatorar. Em uma mudança só de estilo de código, preserve a aparência e o comportamento.
- Siga a configuração do Ruff em `pyproject.toml`, com limite de 100 caracteres por linha. Use `uv run ruff check .`, `uv run ruff format --check .` e `uv run basedpyright` para verificar mudanças autorizadas.
- Por enquanto, só crie ou reintroduza testes automatizados quando o usuário pedir. Para mudanças na interface, confira o fluxo afetado no app quando possível.
