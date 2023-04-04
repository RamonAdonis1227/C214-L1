# Tarefa 5 - API Filmes

Esse código é dedicado a tarefa 5 solicitada pelo monitor, que era a criação de uma API de Filmes.

## Pré-requisitos

- É necessário possuir ferramentas que tem suporte para JavaScript, além do progama POSTMAN, onde é realizada a execução da API.

## Como executar

- A partir do momento que você abrir o terminal, é necessario dar um npm install para instalar todas as dependências necessárias para execução do código, elas serão instaladas automaticamente, porém, repassando elas, são:

 - npm install --save express
 - npm install --save cors
 - npm install --save http-status-code
 - npm install --save validate.js
 - npm install --save moongose
 - npm install --save uuid


- Logo após a instalação das dependências, digite "npm start" para executar o código.

- Depois, vá para o POSTMAN, e faça a conexão com a porta que você escolheu, no meu caso eu escolhi a 5000, então ficou assim: http://localhost:5000/users/.

- Enfim, pode utilizar o POSTMAN para fazer a criação de dados no banco de dados, remoção, atualização, e também mostrar tudo que tem no banco.

- Para criar, usaremos o método create, que é do tipo POST, com a seguinte URL: http://localhost:5000/users/create

- Para deletar, usaremos o método delete, que é do tipo DELETE, com a seguinte URL: http://localhost:5000/users/delete

- Para mostrar os dados do banco, usaremos o método list, que é do tipo GET, com a seguinte URL: http://localhost:5000/users/list

- Também podemos mostrar de acordo com uma das características do filme, no meu caso, coloquei a produtora, ai usamos a URL: http://localhost:5000/users/listUser, e passamos o nome da produtora que queremos ver.

- Por ultimo, temos o método update, que é do tipo PUT, com a seguinte URL: http://localhost:5000/users/update.



##


<img src = "https://s2.glbimg.com/ehwLi8QDHqJ3jQhnCr4BUZ7s8yE=/0x0:1080x1080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f551ea7087a47f39ead75f64041559a/internal_photos/bs/2023/z/5/S7eWXATPavXhpX2S6fnA/snapinsta.app-338769423-731525612090013-8748829826518983654-n-1080.jpg">
