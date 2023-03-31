# OliveiraBookstore
 
Esse projeto de estudo tem como objetivo a demonstração dos meus conhecimentos de Express e MongoDB Atlas. As proximas versões terão aprimoramentos como das rotas, banco de dados, controllers dentre outras coisas.

## Instalação
Após a instalação do projeto, conecte o mongoose uma coleção do MongoDB Atlas.
```console
npm install
```

## Conexão do MongoDB Atlas
No arquivo **./src/config/dbConnect.js** substitua a string de conexão da função `mongoose.connect()` por um banco de dados criado no *https://www.mongodb.com/*, caso tenha algum problema siga as instruções do vídeo abaixo.

*https://www.youtube.com/watch?v=4nO0BERnkc0*

## Scripts
```console
npm run dev
```
Este script executa o `nodemon` no arquivo `server.js` que inicia toda a aplicação possibilitando o **live server**.




