//criar uma constante
const http = require('http');
//const utf8 = require('utf8');

console.log('Iniciando o serviço na porta 9200');

// funcao incluida no modulo http
http.createServer(function (req,res) {
    //res.write('<h1>'+utf8.encode('Olá mundo!!!</h1>')); //resposta enviada ao cliente
    res.write('<h1>Ola mundo!!!</h1>'); //resposta enviada ao cliente
    //res.write(req.url);  
    ///
    ///
    ///
    res.end();
}).listen(9200);
