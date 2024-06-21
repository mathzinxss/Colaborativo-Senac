//adicionei o modulohttp
const http = require('http');
/*

//função de callback
let requisicao = function(req,res){
    res.end("Conectado!!!!");//lerei isso no browser
}

//let middleware
let server = http.createServer(requisicao);
server.listen(8080);
*/
http.createServer(function(req,res){
        res.end("Conectado!!!!");//lerei isso no browser
}).listen(8000);
