//criar uma constante
const http = require('http');
//const fs = require('fs');//webserver
//const path = require('path');
//const utf8 = require('utf8');

//console.log('Iniciando o serviço na porta 9200');

// funcao incluida no modulo http
http.createServer(function (req,res) {
    //res.write('<h1>'+utf8.encode('Olá mundo!!!</h1>')); //resposta enviada ao cliente
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Ola mundo!!!</h1>'); //resposta enviada ao cliente
    //res.write(req.url);  
    //if(req.url='/10'){
        //res.write('<b>Você digitou o número 10 na requisição<b>');
    //}
    res.write(req.url);
    res.end();//ifnaliza a resposta
}).listen(9600);//inicializa o serviço na porta 9600
