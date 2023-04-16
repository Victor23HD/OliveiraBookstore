# OliveiraBookstore / v2.0(BigBrother)
 
Esse projeto de estudo tem como objetivo a demonstração dos meus conhecimentos de Express e MongoDB Atlas. As próximas versões terão uma interface aprimorada para o usuário final.

## Novidades da versão *BigBrother*

### @_Controllers_utilizando_boas_praticas!
Ao estudar documentações, compreendi que, embora não seja tecnicamente incorreto, o uso de classes em JavaScript não é considerado uma boa prática. É recomendável evitar o uso de classes e adotar a abordagem mais tradicional de protótipos para a definição de objetos.

### @_Adicionando_resiliência_na_API
Na versão Snowball, criei todas as contas utilizando o Path to Success. Na segunda versão, aprimorei o feedback para o usuário em caso de erros, incluindo tratamento de erros simples, como o retorno de um livro não encontrado.

### @_Middleware_de_erro
No início do meu trabalho de tratamento de erros, eu percebi que poderia tratar erros de tipos que ocorrem em 2 modelos diferentes, reutilizando o código e, ao mesmo tempo, mantendo o código limpo e organizado.

### @_Validação_de_dados
No início dos meus testes com banco de dados, percebi que era possível registrar livros ou autores passando um JSON completamente vazio. A partir desse momento, comecei a trabalhar na validação de dados para garantir que apenas informações relevantes e válidas fossem registradas no banco de dados.

### @_Implementação_de_paginação
Ao pensar na experiência do usuário, comecei a considerar o padrão de visualização de produtos utilizado pelo mercado. Realizei estudos e iniciei o trabalho para tornar a experiência dos usuários da Livraria Oliveira mais familiar e agradável.

<hr>

## Instalação
Após a instalação do projeto, conecte o mongoose a uma coleção do MongoDB Atlas.
```console
npm install
```

## Conexão do MongoDB Atlas
Crie um arquivo .env no **./src** crie uma variável MONGO_URL e passe uma string de conexão MongoDB Atlas, caso tenha alguma dúvida siga o vídeo abaixo.

> https://www.youtube.com/watch?v=4nO0BERnkc0

## Scripts
```console
npm run dev
```
Este script executa o `nodemon` no arquivo `server.js` que inicia toda a aplicação possibilitando o **live server**.

## API
Após executar o script `npm run dev` abra o *Postman* e teste as rotas abaixo!

> **index.js > bookRoute.js**  

<table>
  <thead>
    <tr>
      <th> bookRouter </th>
      <th>URL</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> GET </td>
      <td> http://localhost:3000/books </td>
      <td> { bookController.js > async listBooks() } <br> Lista todos os livros da coleção, populando o campo Author. </td>	    
    </tr>
   <tr>
      <td> GET </td>
      <td> http://localhost:3000/books/find?publisher=publisherName</td>
      <td> { bookController.js > async findByPublisher() } <br> Lista todos os livros da coleção que contém a editora indicado. </td>	    
    </tr>
    <tr>
      <td> POST </td>
      <td> http://localhost:3000/books</td>
      <td> { bookController.js > async registerBook() } <br> Registra o livro passado no body utilizando a Model.books como base. </td>	    
    </tr>
   <tr>
      <td> PUT </td>
      <td> http://localhost:3000/books/:id</td>
      <td> { bookController.js > async updateBook() } <br> Atualiza livro passado na URL como "/id", utilizando o body. </td>	    
    </tr>
    <tr>
      <td> DELETE </td>
      <td> http://localhost:3000/books/:id</td>
      <td> { bookController.js > async deleteBook() } <br> Deleta o livro passado na URL como "/id". </td>	    
    </tr>
  </tbody>
</table>


> **index.js > authorRoute.js**  

<table>
  <thead>
    <tr>
      <th> authorRouter </th>
      <th>URL</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> GET </td>
      <td> http://localhost:3000/authors </td>
      <td> { authorsController.js > async listAuthor() } <br> Lista todos os autores da coleção. </td>	    
    </tr>
    <tr>
      <td> GET </td>
      <td> http://localhost:3000/authors/:id </td>
      <td> { authorsController.js > async listAuthorById() } <br> Lista o author do "/id" passado na URL. </td>	    
    </tr>
    <tr>
      <td> POST </td>
      <td> http://localhost:3000/authors </td>
      <td> { authorsController.js > registerAuthor() } <br> Registra o autor passado no body utilizando a Model.authors como base. </td>	    
    </tr>
   <tr>
      <td> PUT </td>
      <td> http://localhost:3000/authors/:id </td>
      <td> { authorsController.js > async updateAuthor() } <br> Atualiza autor passado na URL como "/id", utilizando o body. </td>	    
    </tr>
    <tr>
      <td> DELETE </td>
      <td> http://localhost:3000/books/:id</td>
      <td> { authorsController.js > async deleteAuthor() } <br> Deleta o autor passado na URL como "/id". </td>	    
    </tr>
  </tbody>
</table>

## Sobre o Projeto
Esse projeto foi desenvolvido com o objetivo de entender como utilizar o MongoDB e Express. A estrutura dos arquivos e códigos pode não estar perfeita, mas foi feito o melhor possível para que tudo funcione. Caso você tenha alguma sugestão, `fique a vontade para abrir uma issue no repositório ou entre em contato através do meu LinkedIn`: https://www.linkedin.com/in/victor23hd/

## Tecnologias Utilizadas
* Node.js
* API Rest
* Middleware de erros
* Express fremework
* MongoDB Atlas / Mongoose
* Postman
