import { buscarTitulares } from './module/titular.js';
import { Conta } from './module/conta.js';
import express from 'express';
import { buscarcontas } from './module/titular.js';
import { autenticar } from './module/conta.js'
const app = express()
{
    let titulares = buscarTitulares();

    console.log(titulares);


    app.get('/', function (req, res) {
        let contas = buscarcontas(titulares)
        res.json(contas)




    })

    app.get('/autenticar/:agencia/:numero/:senha', function (req, res) {
        let agencia = parseInt(req.params.agencia)
        let numero = parseInt(req.params.numero)
        let senha = parseInt(req.params.senha)
        res.json({agencia, numero, senha})
      
        contas.forEach(conta => {
        if (conta.numeroConta == numero && conta.agencia == agencia && conta.senha == senha) {
            res.json({resp:true})
        }
        else {
            res.json({resp:false})
        }
       });
        

        let titulares = buscarTitulares()
        let contas = buscarcontas(titulares)
        res.json(contas)
    })
   
}

app.listen(3000)

