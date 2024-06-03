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




|Caso de Teste    | CT-2 - Vendas por produto |
|:---|:---|
| Requisitos Associados | RF-03 |
| Objetivo do Teste | A aplicação ser capaz de registrar indicativo de desempenho de vendas por tipo de produto. |
| Passos |1. Acessar o navegador.&nbsp;&nbsp;2. Informar o endereço do site.&nbsp;&nbsp;3. Visualizar a página home.&nbsp;&nbsp;4. Clicar em vendas.&nbsp;&nbsp;5. Digitar o número de vendas realizada do produto desejado e clicar em registrar venda.|
| Critérios de êxito | Após informar a quantidade do itens vendido, o sistema deverá começar a somar a quantidade de itens vendidos por tipo de produto. |
| Responsável pela elaborar do caso de Teste | Jaimir |




|Caso de Teste    | CT-2 - Alerta de produto que não tem saída/produto parado |
|:---|:---|
| Requisitos Associados | RF-07 |
| Objetivo do Teste | A aplicação deve gerar alerta quando o produto fica parado por um determinado tempo sem registrar saída |
| Passos | 1 - Deve-se acessar a aba com aplicação de adicionar e remover produto, também é necessário abrir o localstorage onde os dados ficam armazenados, e ao adicionar ou remover itens de um determinado produto é gerado um alerta no localstorage se o produto atingir um determinado tempo parado, que neste caso para o teste em questão o alerta é gerado se o produto ficar 1 minuto sem remoção de item. 
2 - Também é deverá ser realizado a atualização da página onde se adiciona e remove produto para que seja gerado um alerta dos produtos que estão parados no estoque.   |
| Critérios de êxito | 1 - Após adicionar ou remover item de algum produto, deve-se observar se no localstorage gerou algum alerta informando quais produtos estão sem remoção há um determinado tempo e se o alerta está ocorrendo dentro do tempo estipulado e com os produtos corretos.
2 - Ao recarregar a página onde se adiciona o remove os itens do estoque deve-se observar se será gerado o alerta dos produtos que estão parados há mais de 1 minuto.|
| Responsável pela elaborar do caso de Teste | Wenderson |





 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
