## InsightPro - Plataforma de Coleta e Análise de Avaliações com IA

## Descrição Geral do Projeto

O InsightPro é uma plataforma inovadora para coleta, análise e geração de relatórios de avaliações de produtos utilizando técnicas avançadas de web scraping e inteligência artificial generativa. Desenvolvido para auxiliar empresas na obtenção de insights estratégicos, o InsightPro oferece uma visão profunda baseada no feedback de consumidores em plataformas de e-commerce.

## Objetivos Principais

Automatização da Coleta de Dados: Coleta automática de avaliações de e-commerce e YouTube.
Geração de Insights: Identificação de padrões para otimização de produtos.
Suporte à Decisão Estratégica: Baseado em dados reais processados por IA.
Evolução do Desenvolvimento
Sprint 3 - Base Estrutural e Persistência de Dados

## Na terceira sprint, foi estabelecida uma base sólida para o InsightPro:

Documentação de Benefícios e Objetivos: Inovação acelerada, redução de custos, escalabilidade e fidelização de clientes.
Desenho da Arquitetura: Definição de recursos, fluxos de dados e estrutura geral.
Configuração do Banco de Dados no Azure: Criação do DDL das tabelas e estruturação da persistência de dados.
Documentação em Vídeo: Produção de um vídeo demonstrando o processo de implementação, desde o clone do repositório Git até a publicação e persistência de dados.

## Sprint 4 - Automação e Integração Contínua
Na quarta sprint, os esforços focaram na automação do deploy e integração contínua:

Azure DevOps: Configuração de um pipeline no Azure Pipelines para build e publicação automatizada do aplicativo.
Banco de Dados e App Service no Azure: Integração do banco de dados da Azure ao aplicativo Java, reforçando a persistência e conectividade.

##Reflexão sobre o Projeto
Ao longo do desenvolvimento, enfrentamos desafios técnicos na integração da aplicação com o pipeline e o banco de dados em nuvem. A automação de deploy aumentou a produtividade e consistência, consolidando conhecimentos em DevOps e desenvolvimento. Este projeto destacou a importância de uma comunicação clara e registros detalhados para facilitar futuras manutenções.

## Estrutura e Justificativa do Banco de Dados NoSQL
Banco de Dados: MongoDB
Flexibilidade de Esquema: Adaptável a novos dados e tipos de feedback.
Escalabilidade Horizontal: Sharding e suporte a grandes volumes de dados.
JSON-like Documents: Estrutura ideal para dados complexos e aninhados.
Coleções Principais
Clientes: Dados pessoais, endereços e histórico de compras.
Produtos: Descrição, preço, quantidade e avaliações.
Avaliações: Comentários e notas dos clientes.
Inteligência Artificial: Algoritmos, parâmetros e registros de desempenho.
Sugestões: Relevância e aceitação de sugestões de produtos.
Auditoria e Logs: Operações críticas e monitoramento de erros.
Organização e Execução de Testes
Gráficos de Estado: Mostra o progresso (Passou, Falhou, Em Andamento).
Gráfico de ‘Executado por’: Monitoramento das contribuições da equipe.
Documentação de Testes: Detalhamento das entradas, saídas esperadas e status.
Agrupamento por Sprint: Rastreabilidade das funcionalidades entregues.
Tecnologias Utilizadas
Backend: Java, Spring Boot, ASP.NET Core, Spring Security.
Frontend: Thymeleaf, Bootstrap, React Native (para a versão mobile).
Banco de Dados: MongoDB, SQL Server.
Inteligência Artificial: ML.NET, Gemini API.
Cloud: Azure (Blob Storage, Cognitive Services, Machine Learning).
Testes: xUnit para .NET.
Mensageria: Kafka/RabbitMQ.
Arquitetura do Sistema
O InsightPro é desenvolvido com uma arquitetura de camadas, favorecendo modularidade e escalabilidade:

Camada de Apresentação: ASP.NET Core para endpoints da API.
Camada de Aplicação: Lógica de negócios de alto nível.
Camada de Domínio: Entidades e regras de negócio.
Camada de Infraestrutura: Acesso ao banco de dados.
Camada de Testes: xUnit para garantir a confiabilidade do sistema.
Segurança e Integração
Para garantir a segurança dos dados no MongoDB:

## Autenticação e Autorização: RBAC e controle granular de permissões.
Criptografia: Em repouso e em trânsito.
Configurações de Rede: Acesso restrito a IPs confiáveis.
Auditoria e Logs: Monitoramento de operações sensíveis e detecção de atividades suspeitas.
Endpoints Disponíveis
Produtos
GET /api/produtos: Retorna todos os produtos.
GET /api/produtos/{id}: Retorna um produto específico.
POST /api/produtos: Cria um novo produto.
PUT /api/produtos/{id}: Atualiza um produto existente.
DELETE /api/produtos/{id}: Remove um produto.
Avaliações
GET /api/avaliacoes: Retorna todas as avaliações.
GET /api/avaliacoes/{id}: Retorna uma avaliação específica.
POST /api/avaliacoes: Cria uma nova avaliação.
PUT /api/avaliacoes/{id}: Atualiza uma avaliação existente.
DELETE /api/avaliacoes/{id}: Remove uma avaliação.
Clientes
POST /clientes: Cria um novo cliente.
GET /clientes: Busca todos os clientes.
PUT /clientes/{id}: Atualiza um cliente.
DELETE /clientes/{id}: Remove um cliente.
Instalação e Execução da API
Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:

.NET 6 SDK
Visual Studio 2022 ou VS Code
MongoDB
Oracle
Passo a Passo para Executar
Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git
Acesse o diretório da API:
cd InsightPro.Produto.API
Configure a string de conexão no arquivo appsettings.json:
"ConnectionStrings": {
  "DefaultConnection": "Server=SEU_SERVIDOR;Database=InsightProDB;User Id=seu_usuario;Password=sua_senha;"
}
Restaure as dependências:
dotnet restore
Compile o projeto:
dotnet build
Execute a API:
dotnet run
A API estará disponível em http://localhost:5000.

## Vantagens Competitivas
Atualização em Tempo Real: Dados sempre atualizados com web scraping.
Automatização Completa: Redução de esforço manual e eficiência.
Escalabilidade e Flexibilidade: Arquitetura modular e uso da nuvem.
Personalização de Insights: Relatórios customizados para cada cliente.

## Integrantes
Rm 98660 - Leonardo Valentim de Souza

RM 97714 - João Victor Leite Firmino

Rm 99618 - Gustavo dos Santos Correa

RM 551201 - Lucas Cazzaro

RM 99219 - Ronaldo Riyudi Noda
