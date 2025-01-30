# travel-planner-api

## Planejador de Viagens

## Sumário
- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Funcionalidades planejadas](#funcionalidades-planejadas)

## Descrição
Um serviço de planejamento de viagens que permite criar roteiros personalizados, integrando recursos avançados como API Gateway e mensageria para simular cenários reais de produção.

## Tecnologias Utilizadas
- **Linguagem**: Node.js com TypeScript
- **Banco de Dados**: PostgreSQL com Sequelize
- **Arquitetura**: Clean Architecture
- **Testes**: Jest e Supertest
- **Outras Ferramentas**:
  - Docker e Docker Compose
  - ESLint e Prettier
  - AWS
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
cd travel-planner-api
```

### Passo 2: Instale as dependências
Dentro da pasta do projeto, instale as dependências necessárias:

```bash
npm install
```

### Passo 3: Configure as variáveis de ambiente no arquivo .env.
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente. Exemplo de variáveis:

```json
DB_HOST=localhost
DB_PORT=5432
DB_USER=user
DB_PASSWORD=password
DB_NAME=travel_planner
```

### Passo 4: Suba o banco de dados com Docker
Caso esteja utilizando Docker, suba um contêiner PostgreSQL:

```bash
docker-compose up -d
```

Se precisar criar o banco manualmente:

```bash
docker run --name travel-planner-db -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=travel_planner -p 5432:5432 -d postgres
```

### Passo 5: Execute as migrações do Sequelize

```bash
npm run migrate
```

### Passo 6: Inicie a aplicação
Para rodar em modo de desenvolvimento:

```bash
npm run dev
```

## Documentação
Para mais detalhes sobre o uso da API, roadmap do projeto e decisões técnicas, acesse a documentação completa no diretório docs/:

[Documentação da API](https://docs.google.com/document/)
[Roadmap do Projeto](https://docs.google.com/document/)


### Funcionalidades planejadas
- Integrações com APIs externas.
- Mensageria com Kafka/RabbitMQ.
