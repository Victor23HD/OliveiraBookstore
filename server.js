import http from "http";

const port = 3000;
const server = http.createServer((req, res) => 
{
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Oliveira BookStore!");
});

server.listen(port,() => 
{
    console.log(`Escutando requisição em http://localhost:${port}`);
});


