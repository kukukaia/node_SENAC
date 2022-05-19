//criar uma constante
const http = require('http');

console.log('Iniciando o serviço na porta 9600');

// funcao incluida no modulo http
http.createServer(function (req,res) {
    res.write('<h1>Olá mundo!!!</h1>'); //resposta enviada ao cliente
    res.write('<h1>Olá mundo!!!</h1>'); //resposta enviada ao cliente
    res.write('<h1>Olá mundo!!!</h1>'); //resposta enviada ao cliente
    res.write('<h1>Olá mundo!!!</h1>'); //resposta enviada ao cliente
    ///
    ///
    ///
    res.end();
}).listen(9600);
