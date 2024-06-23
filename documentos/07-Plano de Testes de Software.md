# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Requisitos Associados | RF-X |
| Objetivo do Teste | Descrição do objetivo do teste |
| Passos | Indicar passos para a execução do teste |
| Critérios de êxito | Indicar os critérios de êxito  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |



|Caso de Teste    | CT-1 - Filtro de pesquisa |
|:---|:---|
| Requisitos Associados | RF-09 |
|  Objetivo do Teste | A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar itens no estoque. |
| Passos |1. Acessar o navegador&nbsp; &nbsp;2. Informar o endereço do site.&nbsp; &nbsp;3. Visualizar a página home.&nbsp;  &nbsp;4. Fazer login.&nbsp;  &nbsp;5. Clicar na página de estoque.&nbsp;  &nbsp;6. Digitar no filtro o item desejado registrado anteriormente no localstorage.|
| Critérios de êxito | Após digitar no filtro o nome do item, o mesmo deve aparecer em primeiro na tela do usuário.  |
| Responsável pela elaborar do caso de Teste | Jaimir |




|Caso de Teste    | CT-2 - Registrar indicativo de desempenho de vendas por tipo de produto. |
|:---|:---|
| Requisitos Associados | RF-03 |
| Objetivo do Teste | A aplicação ser capaz de registrar indicativo de desempenho de vendas por tipo de produto. |
| Passos |1. Acessar o navegador.&nbsp;&nbsp;2. Informar o endereço do site.&nbsp;&nbsp;3. Visualizar a página home.&nbsp;&nbsp;4. Clicar em vendas.&nbsp;&nbsp;5. Digitar o número de vendas realizada do produto desejado e clicar em registrar venda.|
| Critérios de êxito | Após informar a quantidade de itens vendidos, o sistema deverá começar a somar a quantidade de itens vendidos por tipo de produto, atualizando o localstorage e mostrando um grafico com a quantidade de cada item vendido. |
| Responsável pela elaborar do caso de Teste | Jaimir |




|Caso de Teste    | CT-3 - Alerta de produto que não tem saída/produto parado |
|:---|:---|
| Requisitos Associados | RF-07 |
| Objetivo do Teste | A aplicação deve gerar alerta quando o produto fica parado por um determinado tempo sem registrar saída |
| Passos | 1 - Deve-se acessar a aba com aplicação de adicionar e remover a quantidade do produtos, também é necessário abrir o localstorage onde os dados ficam armazenados. Ao adicionar ou remover itens de um determinado produto é gerado um alerta no localstorage se o produto atingir um determinado tempo parado, que neste caso para o teste em questão, o alerta é gerado se o produto ficar 1 minuto sem remoção de item. 2 - Ao fazer a atualização da página onde se adiciona e remove a quantidade dos itens de cada produto cadastrado é gerado um alerta dos produtos que estão parados no estoque.   |
| Critérios de êxito | 1 - Após adicionar ou remover item de algum produto, deve-se observar se no localstorage gerou algum alerta informando quais produtos estão sem remoção há um determinado tempo, se o alerta está ocorrendo dentro do tempo estipulado e com os produtos corretos. 2 - Ao recarregar a página onde se adiciona ou remove os itens do estoque, deve-se observar se será gerado o alerta dos produtos que estão parados há mais de 1 minuto.|
| Responsável pela elaborar do caso de Teste | Wenderson |



|Caso de Teste    | CT-4- Verificar a saída de produtos do estoque |
|:---|:---|
| Requisitos Associados | RF-02 |
| Objetivo do Teste | A aplicação ser capaz de registrar a saída de mercadorias do Estoque |
| Passos | Preencher os campos de Data, selecionar um produto cadastrado no estoque, escolher a quantidade do produto, preencher o campo de valor do produto , adicionar vendas. No final a aplicaçao deve ser capaz de gerar o valor total da venda e dar baixa no estoque. |
| Critérios de êxito | Após realizar as etapas de preenchimento dos campos e adicionar venda a aplicaçao dar baixa dos produtos vendidos no localstorage. |
| Responsável pela elaborar do caso de Teste | Danillo A. F. Neves |


|Caso de Teste    | CT-5- Alertar vendas mensais que cada funcionário realizou |
|:---|:---|
| Requisitos Associados | RF- 11 |
| Objetivo do Teste | A aplicação ser capaz de alertar quantas vendas mensais cada funcionário realizou |
| Passos | Selecionar um colaborador cadastrado na empresa, escolher o ano de pesquisa, clicar em emitir relatório. No final a aplicaçao deve ser capaz de gerar um relatório com todos os valores mensais realizados durante o ano selecionado. |
| Critérios de êxito | Após realizar as etapas de preenchimento dos campos a aplicaçao emitirá em relatório representado por um grafico no mesmo instante que o usuário clicar em emitir relatório. |
| Responsável pela elaborar do caso de Teste | Paulo L. O. Ferreira |


|Caso de Teste    | CT-6- Avaliar o cadastro e exclusão de itens no estoque |
|:---|:---|
| Requisitos Associados | RF-12 |
| Objetivo do Teste | Avaliar se o sistema esta funcionando de acordo com o objetivo de cadastrar e excluir itens do estoque no localstorage, que os campos sejam preenchidos e os botões funcionem.  |
| Passos | Preencher o campo selecionando o tipo de produto, a categoria qual pertence, cadastrar o preço e preencher a data de validade do produto. Utilizar os botões salvar para adicionar produtos, botão limpar para editar e botão excluir para remover produtos.|
| Critérios de êxito | O sistema responder aos comandos de execução ao ser adicionado e excluido produtos do localstorage, integração com o localstorage.  |
| Responsável pela elaborar do caso de Teste | Danillo A. F. Neves |

|Caso de Teste    | CT-7- Funcionalidade deve ser capaz de registrar entrada de mercadorias. |
|:---|:---|
| Requisitos Associados | RF- 01 |
| Objetivo do Teste | A aplicação ser capaz de registrar entradas de mercadorias em estoque |
| Passos | Selecionar um item cadastrado na empresa, escolher o item de entrada, quantidade e a data, clicar em adicionar item. A aplicação enviará um alerta sobre entrada de mercadorias em estoque. |
| Critérios de êxito | O sistema responder aos comandos de execução ao ser adicionado produtos do localstorage, integração com o localstorage.  |
| Responsável pela elaborar do caso de Teste | Paulo L. O. Ferreira |


|Caso de Teste    | CT-8 - Funcionalidade deve ser capaz de alertar nível baixo de estoque |
|:---|:---|
| Requisitos Associados | RF-05 |
| Objetivo do Teste | A aplicação deve ser capaz de gerar alerta quando o estoque atinge margem de segurança de cada item. |
| Passos | 1 - Ao pesquisar itens no estoque será gerado um alerta quando o número de itens deste estoque for menor do que 30. 2 - Ao adicionar um determinado produto e este produto tiver menos do que 30 itens no estoque, será gerado um alerta sinalizando que o produto possui menos do que 30 itens no estoque. 3 - Ao adicionar um determinado produto e este produto tiver menos do que 30 itens no estoque, será gerado um alerta sinalizando que o produto possui menos do que 30 itens no estoque. |
| Critérios de êxito | 1 - Deve-se clicar no item de busca e confirmar se ao iniciar a busca é gerado um alerta sobre o nível inferior a 30 itens no estoque se algum produto estiver com número de itens inferior a margem estipulada. 2 -  Deve-se Adicionar um produto com número de itens inferior a 30  e confirmar se será gerado o alerta sinalizando o número de estoque abaixo da margem estipulada. 3 - Deve-se editar a quantidade no estoque de um determinado produto deixando a quantidado abaixo de 30 itens e confirmar se será gerado o alerta sinalizando o número de estoque abaixo da margem estipulada. 
| Responsável pela elaborar do caso de Teste | Wenderson |

|Caso de Teste    | CT-9 - A aplicação deve emitir alertas de erro ao buscar dados inválidos. |
|:---|:---|
| Requisitos Associados | RF-06 |
| Objetivo do Teste | A aplicação deve ser capaz de gerar alerta quando a data de início for superiro à data de término da pesquisa. |
| Critérios de êxito | 1 Clique no campo de entrada e selecione uma data que seja posterior à data atual. Em seguida, clique no campo de entrada e selecione uma data que seja anterior à data de início. 2 - Após inserir as datas, clique no botão “Buscar” para enviar o formulário. 3 - Observe o alerta. Como a data de início é posterior à data de término, um alerta deve aparecer na tela com a mensagem “A data de início deve ser anterior à data de término.”
| Responsável pela elaborar do caso de Teste | Gustavo Moraes|

|Caso de Teste    | CT-10 - Funcionalidade deve criar alertas referente as datas de vencimento. |
|:---|:---|
| Requisitos Associados | RF-10 |
| Objetivo do Teste | A aplicação deve ser capaz de gerar alerta quando o produto estiver próximo a data de vencimento. |
| Critérios de êxito | Após a inserção de um item no sistema, juntamente com a respectiva data de validade, o sistema é programado para monitorar continuamente esses parâmetros. Quando o produto se aproxima do seu prazo de validade, o sistema automaticamente gera e exibe um alerta. Este alerta contém informações detalhadas sobre a iminência do vencimento do produto, incluindo a quantidade exata de tempo restante até a data de vencimento.
| Responsável pela elaborar do caso de Teste | Gustavo Moraes |
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
