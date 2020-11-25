# automacao_mercadolivre
**Projeto de desafio para QA**

### Para executar a automação:
1- baixe o arquivo zip do projeto e extraia a pasta

2- Abra a pasta no visual studio e execute os comandos na sequencia:

>> npm init --yes

>>npm install -D cypress@4 (**instalação da cypress versão 4, caso queira instalar uma verão mais recente, remova o @4 da palavra cypress**)

>> Após a instalação do cypress execute o comando **npm run cypress:open**

3- Validar o projeto de automação no **cypress**


### Casos de teste realizados

**Cenário 1 - Listar array de todas as moedas cadastradas**

**Dado** que estou na página de consulta de moedas <br>
**Quando** consulto todas as moedas cadastradas <br>
**Então** é listado a quantidade de id's cadastrados <br>

**Cenário 2 - Listar moeda através do ID cadastrado**

**Dado** que estou na página de consulta de moedas<br>
**Quando** consulto uma moeda através do seu ID (correto)<br>
**Então** é listado a informação da origem da moeda <br>

**Cenário 3 - Listar moeda através do ID que não esteja dentro do array ou não existente**

**Dado** que estou na página de consulta de moedas<br>
**Quando** consulto uma moeda através do seu ID (inexistente)<br>
**Então** exiba a mensagem de erro <br>
