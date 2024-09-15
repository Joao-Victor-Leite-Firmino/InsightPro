# InsightPro - Plataforma de Coleta e Análise de Avaliações com IA

## Descrição Geral do Projeto

O InsightPro é uma plataforma revolucionária desenvolvida para coletar, analisar e gerar relatórios a partir de avaliações de produtos, utilizando técnicas avançadas de web scraping e inteligência artificial generativa. Nosso objetivo é fornecer insights profundos e acionáveis sobre produtos, com base em feedback real de consumidores, auxiliando empresas a aprimorarem suas ofertas e a tomarem decisões mais estratégicas.

A crescente quantidade de dados gerada diariamente por consumidores em plataformas de e-commerce torna o uso de tecnologias inovadoras como o InsightPro crucial para empresas que buscam uma vantagem competitiva. O InsightPro centraliza e automatiza a coleta de feedback, garantindo que os dados sejam sempre atualizados e analisados com precisão. O sistema não apenas armazena, mas também analisa essas informações utilizando IA generativa e machine learning para sugerir melhorias e inovações no desenvolvimento de produtos.

### Principais Objetivos:

- Automatizar o processo de coleta de avaliações de diversas plataformas de e-commerce e fontes como YouTube.
- Fornecer insights valiosos para otimizar produtos e melhorar a experiência do consumidor.
- Apoiar a tomada de decisões estratégicas para empresas com base em dados reais, extraídos de forma automatizada e processados por inteligência artificial.
  
## Evolução do Desenvolvimento

O desenvolvimento do InsightPro foi executado em várias etapas, cada uma com avanços significativos:

### 1. Concepção Teórica (Segunda Sprint)

O projeto foi inicialmente planejado e concebido em um modelo teórico, com foco na definição da arquitetura do sistema e nas funcionalidades desejadas. Nessa fase, foram realizados os seguintes passos:
- Definição dos fluxos de dados e dos componentes essenciais para o funcionamento do sistema.
- Criação dos diagramas da arquitetura.
- Especificação das funcionalidades de coleta de dados e análise de IA.

### 2. Construção e Integração (Terceira Sprint)

Na terceira sprint, o InsightPro evoluiu para uma fase prática, onde a plataforma começou a ser construída. Foram implementadas as funcionalidades essenciais, que incluíram:
- Web Scraping Automatizado: O sistema foi configurado para coletar dados em tempo real de diversas plataformas de e-commerce e marketplaces, eliminando a necessidade de inserção manual de dados.
- Análise de Dados com IA Generativa: Após a coleta, os dados passam por uma análise avançada utilizando inteligência artificial, que identifica padrões, tendências emergentes, pontos fortes e fracos dos produtos, gerando insights que são apresentados em relatórios detalhados.
- Interface de Usuário (UI): Foi implementada uma interface mais amigável e intuitiva, utilizando o padrão *MVC (Model-View-Controller)* com Thymeleaf, facilitando a navegação e o gerenciamento das avaliações, produtos e clientes.

## Estrutura do Backlog

O backlog de produto do InsightPro é organizado em três níveis hierárquicos:

1. *Épicos*: Representam os maiores objetivos do sistema. No caso do InsightPro, os épicos incluem:
   - Captura e Armazenamento de Reclamações
   - Armazenamento de Comentários e Reclamações
   - Tratamento e Análise de Reclamações
   - Comparação e Sugestão de Produtos

2. *Funcionalidades*: São grupos de trabalho que detalham o que será desenvolvido dentro dos épicos. Exemplos de funcionalidades:
   - Comparação de Produtos Baseada em Feedback
   - Captura de Reclamações em Sites e YouTube
   - Processamento de Reclamações Utilizando IA
   - Armazenamento de Reclamações no Banco de Dados

3. *Itens de Entrega (PBIs)*: São as tarefas específicas que compõem as funcionalidades, como:
   - Armazenar Reclamações no Banco de Dados
   - Captura de Reviews do YouTube
   - Processar Comentários com IA.

## Funcionalidades Detalhadas

O InsightPro oferece uma série de funcionalidades avançadas que tornam sua operação eficaz e adaptável às necessidades das empresas:

- Coleta Automática de Dados: O web scraper coleta avaliações e reclamações de produtos diretamente de plataformas de e-commerce, YouTube e sites de review. Esses dados são inseridos automaticamente em um banco de dados centralizado, mantendo as informações sempre atualizadas.
  
- Análise Avançada com IA: Utilizando algoritmos de IA generativa, o InsightPro processa grandes volumes de dados, identificando padrões ocultos e gerando relatórios que auxiliam na otimização de produtos. Os relatórios destacam pontos fortes, áreas de melhoria e fornecem recomendações baseadas em dados.

- Interface de Usuário Interativa: Com a integração de *Thymeleaf* e o padrão *MVC*, a plataforma oferece uma interface moderna e interativa para os usuários. A interface facilita a visualização e a análise de avaliações e comentários, proporcionando uma experiência de usuário rica e intuitiva.

- Relatórios Customizados: A partir da análise dos dados coletados, o InsightPro gera relatórios customizados, permitindo às empresas identificar tendências e ajustar suas estratégias com base no feedback real dos consumidores.

## Projeto Relacionado: Solução em Nuvem com API Java

Além do InsightPro, a equipe desenvolveu uma solução em nuvem hospedada na Azure, que complementa o projeto. Esta solução utiliza uma *API em Java* conectada a um banco de dados SQL Server e oferece as seguintes funcionalidades:

- Funcionalidades CRUD: Implementação de operações para *Criar, Ler, Atualizar e Excluir* dados de avaliações e produtos.
- Integração com IA: A solução também utiliza inteligência artificial para processar feedbacks e gerar insights que ajudam a melhorar a competitividade dos produtos no mercado.
- Escalabilidade em Nuvem: Utilizando os recursos da Azure, a solução é totalmente escalável, aproveitando serviços como *Azure Blob Storage, **Azure Cognitive Services* e *Azure Machine Learning* para garantir alta disponibilidade e flexibilidade no processamento de grandes volumes de dados.

## Vantagens Competitivas

- Atualização em Tempo Real: O uso de web scraping garante que as avaliações sejam coletadas e analisadas em tempo real, oferecendo insights sempre atualizados.
- Automatização Completa: Desde a coleta de dados até a geração de relatórios, todo o processo é automatizado, reduzindo significativamente o esforço manual e aumentando a eficiência.
- Escalabilidade e Flexibilidade: As soluções desenvolvidas são altamente escaláveis, permitindo que empresas de todos os tamanhos se beneficiem do sistema.
- Personalização de Insights: Os relatórios são customizáveis, atendendo às necessidades específicas de cada empresa.

## Tecnologias Utilizadas

- Web Scraping: Coleta automatizada de dados.
- Inteligência Artificial Generativa: Processamento de dados e geração de insights.
- Java: Desenvolvimento da API backend.
- Thymeleaf & MVC: Interface de usuário interativa.
- Azure Cloud Services: Hospedagem e processamento em nuvem, utilizando serviços como *PaaS* e *SaaS*.

## Objetivo Comum dos Projetos

Tanto o InsightPro quanto a solução em nuvem compartilham o objetivo de empregar tecnologias de ponta, como inteligência artificial e coleta automatizada de dados, para fornecer insights valiosos sobre a aceitação e desempenho de produtos no mercado. Essas soluções ajudam as empresas a se adaptarem rapidamente às necessidades dos consumidores, aprimorando suas ofertas e, assim, garantindo uma vantagem competitiva sustentável.

## Integrantes do Projeto

- RM 98660 - Leonardo Valentim de Souza
- RM 97714 - João Victor Leite Firmino
- RM 99618 - Gustavo dos Santos Correa
- RM 551201 - Lucas Cazzaro
- RM 99219 - Ronaldo Riyudi Noda
