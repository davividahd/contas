import { buscarTitulares } from './module/titular.js';
import { Conta } from './module/conta.js';
let titulares= buscarTitulares();
   
console.log(titulares);

let c1 = new Conta(
    11,
    1,
    1000,
    1,
    titulares[0]
)

let c2 = new Conta(
    11,
    2,
    2000,
    2,
    titulares[1]
)

let c3 = new Conta(
    11,
    3,
    3000,
    3,
    titulares[2]
)

let contas = [c1,c2,c3]
console.log(contas);