# travel-planner-api

## Planejador de Viagens

Descrição:  
Um serviço de planejamento de viagens que permite criar roteiros personalizados, integrando recursos avançados como API Gateway e mensageria para simular cenários reais de produção.

## Sumário
- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Roadmap](#roadmap)

## Tecnologias Utilizadas
- **Linguagem**: Node.js com TypeScript
- **Banco de Dados**: PostgreSQL
- **Arquitetura**: Clean Architecture
- **Testes**: Jest e Supertest
- **Outras Ferramentas**:
  - Docker
  - ESLint e Prettier
  - Kafka (ou RabbitMQ) [planejado]

## Estrutura do Projeto

src/
├── application/      # Casos de uso e serviços
├── config/           # Configurações
├── domain/           # Entidades e interfaces
├── infra/            # Comunicação com o banco e serviços externos
├── presentation/     # Controladores
├── routes/           # Rotas
└── utils/            # Utilitários

## Como Rodar o Projeto

### Passo 1: Clone o Repositório
Clone o repositório para sua máquina local com o comando:

```bash
git clone https://github.com/leonardopolicarpo/travel-planner-api.git
```

### Passo 2: Instale as dependências
Dentro da pasta do projeto, instale as dependências necessárias:

```bash
npm install
```

### Passo 3: Configure as variáveis de ambiente no arquivo .env.
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente. Exemplo de variáveis:

DB_HOST=localhost
DB_PORT=5432
DB_USER=user
DB_PASSWORD=password
DB_NAME=travel_planner

### Passo 4: Instale as dependências
Para rodar a aplicação em modo de desenvolvimento, use o comando:

```bash
npm run dev
```

### Passo 5: Rode os Testes
Para rodar os testes automatizados, use o comando:

```bash
npm test
```

## Roadmap

### MVP (em andamento):
- Autenticação.
- CRUD de roteiros.

### Funcionalidades avançadas:
- Integrações com APIs externas.
- Mensageria com Kafka/RabbitMQ.
