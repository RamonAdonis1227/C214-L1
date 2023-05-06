# Tarefa 7 - Carros

Esse código é dedicado a tarefa 7, que foi solicitada pelo monitor, que é a criação de todas as funções básicas de um CRUD de um Carro.

## Pré-requisitos

- É necessário possuir ferramentas que tem suporte para JavaScript e JEST.

## Como executar

- A partir do momento que você abrir o terminal, vá até a pasta "Carro" utilizando os seguintes comandos:

 - cd "pasta destino" (esse comando é para você abrir a pasta de desejo)

 - ls (esse comando é para você ver aonde você está e as pastas que você pode abrir)

 Após abrir a pasta "Carro", é necessario dar um npm install para instalar todas as dependências necessárias para execução do código, elas serão instaladas automaticamente, porém, repassando elas, são:

 - npm install --save express
 - npm install --save cors
 - npm install --save http-status-code
 - npm install --save validate.js
 - npm install --save moongose
 - npm install --save uuid


- Logo após a instalação das dependências, digite "npm start" para executar o código.

- Depois, vá para o POSTMAN, e faça a conexão com a porta que você escolheu, no meu caso eu escolhi a 5000, então ficou assim: http://localhost:5000/users/.

- Enfim, podemos utilizar o POSTMAN para fazer a criação de dados no banco de dados, remoção, atualização, e também mostrar tudo que tem no banco.

- Para criar, usaremos o método create, que é do tipo POST, com a seguinte URL: http://localhost:5000/users/create

- Para deletar, usaremos o método delete, que é do tipo DELETE, com a seguinte URL: http://localhost:5000/users/delete

- Para mostrar os dados do banco, usaremos o método list, que é do tipo GET, com a seguinte URL: http://localhost:5000/users/list

- Também podemos mostrar de acordo com uma das características do filme, no meu caso, coloquei a produtora, ai usamos a URL: http://localhost:5000/users/listUser, e passamos o nome da produtora que queremos ver.

- Temos também o método update, que é do tipo PUT, com a seguinte URL: http://localhost:5000/users/update.



## Como testar

- Para testar o código, primeiramente temos que instalar a ferramenta JEST juntamente com suas dependências, com os seguintes comandos no terminal:

- npm install jest
- npm install --save jest

- Logo após, já podemos testar o código com os testes unitários e testes mock que foram criados, utilizando o seguinte comando no terminal:

- npm test

- Assim, ele começará a realizar os testes, e logo em sequência mostrará o resultado dos testes no terminal.

##


<img src = "https://www.planetsport.com/image-library/square/1200/c/cristiano-ronaldo-portugal-5-june-2022.jpg">
