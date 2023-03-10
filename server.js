import http from "http";

const port = 3000;

const routes = {
    '/': 'Livraria Oliveira!',
    '/Terror': 'Terror',
    '/Fantasia': 'Fantasia',
    '/Biografia': 'Biografia'
}

const server = http.createServer((req, res) => 
{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(routes[req.url]);
});

server.listen(port,() => 
{
    console.log(`Escutando requisição em http://localhost:${port}`);
});


