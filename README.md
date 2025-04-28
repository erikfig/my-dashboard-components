# Components

## Descrição
Este é o projeto de componentes reutilizáveis, projetado para ser consumido por outras aplicações, como o projeto `dashboard`. Ele é construído com React e TypeScript, utilizando uma estrutura modular para facilitar a reutilização e manutenção.

## Estrutura do Projeto
- **src/**: Contém o código-fonte principal, incluindo:
  - **button/**: Componentes de botões.
  - **card/**: Componentes de cartões.
  - **charts/**: Componentes de gráficos baseados em ApexCharts.
  - **data-table/**: Componentes de tabelas de dados.
  - **form/**: Componentes de formulários e adaptadores.
  - **img/**: Componentes para manipulação de imagens.
  - **pagination/**: Componentes de paginação.
  - **rounded/**: Componentes com bordas arredondadas.
  - **spinner/**: Componentes de carregamento.
  - **table/**: Componentes de tabelas.
  - **toast/**: Componentes de notificações.
  - **typography/**: Componentes de tipografia.

## Configuração e Execução
1. Instale as dependências:
   ```bash
   yarn install
   ```
2. Para construir o projeto:
   ```bash
   yarn build
   ```
3. Para publicar o pacote:
   ```bash
   yarn publish
   ```

## Dependências Principais
- React
- TypeScript
- ApexCharts

## Scripts Disponíveis
- `yarn build`: Gera a build do projeto, incluindo arquivos `.d.ts`.
- `yarn prepare`: Executa o build automaticamente antes de publicar ou instalar o pacote.
- `yarn postinstall`: Gera o build após a instalação.

## Notas
Certifique-se de que o TypeScript está configurado corretamente para gerar os arquivos `.d.ts` no diretório `dist`. O projeto está configurado para ser consumido diretamente a partir do GitHub.