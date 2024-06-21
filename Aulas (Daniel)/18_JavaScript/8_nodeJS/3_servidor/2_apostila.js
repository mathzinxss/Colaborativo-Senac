//adicionei o modulohttp
const http = require('http');

/*
//função de callback
let requisicao = function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<h1>Conectado com sucesso!!!!!!</h1>");
    response.end();//lerei isso no browser
}

let mensagem = ()=>{
    console.log("Servidor em funcionamento");//mensagem no terminal
}
//let middleware
let server = http.createServer(requisicao);
server.listen(8080,mensagem);
*/
 http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<h1>Conectado com sucesso!!!!!!</h1>");
    response.end();//lerei isso no browser
}).listen(8080,()=>{
    console.log("Servidor em funcionamento");//mensagem no terminal
});