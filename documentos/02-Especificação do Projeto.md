# Especificação do Projeto

## Perfis de Usuários









<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Proprietário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Dono do estabelecimento, responsável por administrar e atendimento ao público.  
 </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Entender quais produtos necessito comprar e quando. 

2. Saber qual funcionário vendeu mais durante o mês 

3. Saber quais produtos são os mais vendidos para me programar melhor. 

4. Lidar com o atendimento de forma mais ágil e prática. 

5. Lembrar quando meus produtos estão próximos a data de vencimento. 

6. Saber quais produtos estão a mais tempo parados no estoque. 

7. Me certificar que nenhum produto está sendo extraviado. 

8. Reduzir a necessidade do papel no meu estabelecimento.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Funcionário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">  Responsável pelo atendimento ao público e controle do estoque
 </td>
</tr>
<tr>
<td><b>Necessidades</b>  
</td>
<td>1. Alertar meu gestor de quantos e quais produtos consegui vender no dia. 

2. Registrar as entradas e saídas dos produtos. 

3. Saber quando tenho que avisar meu gestor sobre compras. 

4. Melhorar a gestão entrada e saída de produtos na loja.
5.  Avisar o gestor sobre produtos próximos a data de validade.</td>
</tr>
</tbody>
</table>




## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Proprietário da distribuidora.|Organizar compras de produtos específicos para a distribuidora.|Não faltar nenhum produto no estoque.|
| Funcionário.|Facilitar o registro de entrada e saída do estoque.|Ganhar mais tempo.
| Proprietário da distribuidora.| Reduzir produtos parados no estoque.|Não deixar capital parado.|
| Proprietário da distribuidora.|Me programar melhor para datas comemorativas onde tenho nível elevado de vendas.|Não perder vendas por falta de estoque em datas sazonais.|
|Funcionário.|Não ter que contabilizar os produtos recorrentemente.|Ganhar mais tempo e fazer menos esforço.|
|Funcionário.|Informar melhor meu gestor sobre minhas vendas.|Não perder comissão por falta de anotações.|
|Proprietário da distribuidora.|Receber relatórios fidedignos sobre entradas e saídas dos meus produtos.|Elaborar melhores formas de investimento.|
|Proprietário da distribuidora.|Reduzir produtos extraviados.|Entender onde meus produtos estão sendo perdidos.|
## Requisitos do Projeto



### Requisitos Funcionais



|ID     | Descrição                                  | Prioridade |
|-------|--------------------------------------------|------------|
| RF-01 | A aplicação ser capaz de registrar a entrada de mercadorias.|ALTA| 
| RF-02 | A aplicação ser capaz de registrar a saída de mercadoria. | ALTA  |
| RF-03 | A aplicação ser capaz de registrar indicativo de desempenho de vendas por tipo de produto.|MÉDIA|
| RF-04 | A aplicação gerar base de dados com variações de sazonalidade de vendas.|ALTA|
| RF-05 | A aplicação ser capaz de gerar alerta quando estoque atinge margem de segurança de cada item.|ALTA|
| RF-06 | A aplicação deve gerar estimativa de valores vendidos.|MÉDIA|
| RF-07 | A aplicação ser capaz de alertar sobre tempo de estoque parado de um determinado produto.|MÉDIA|
| RF-08 | A aplicação deve permitir o usuário cadastrar uma conta.|ALTA|
| RF-09 | A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar itens no estoque.|MÉDIA| 
| RF-10 | A aplicação deve criar alertas para produtos com data de vencimento próxima. |MÉDIA|
| RF-11 | A aplicação deve alertar quantas vendas mensais cada funcionário realizou. |ALTA|
| RF-12 | A aplicação deve ser capaz de cadastrar e excluir itens do estoque.|ALTA|


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | A aplicação ser capaz de integrar com aplicativos de entrega. | MÉDIA  | 
| RNF-02 |  A aplicação deve ser capaz de criptografar os dados do estoque do cliente. | BAIXA | 
| RNF-03 | A aplicação deve se manter atualizada ao longo do tempo. | MÉDIA| 
| RNF-04 | A aplicação deve ser capaz de operar mais de 01 usuário por conta. | MÉDIA | 
| RNF-05 | A aplicação ser rápida e de fácil uso. | MÉDIA  | 
| RNF-06 | O sistema deve funcionar 24 horas por dia, todos os dias da semana. | ALTA | 
| RNF-07 | O sistema deve estar acessível na web. | ALTA  | 
| RNF-08 | O sistema ser capaz de conectar a forma de pagamento via máquinas de cartão.| MÉDIA | 
| RNF-09 | O software deve ser capaz de lidar com grandes volumes de dados e operações simultâneas de forma eficiente, garantindo tempos de resposta rápidos. | MÉDIA | 

**Prioridade: Alta / Média / Baixa. 

