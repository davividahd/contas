import { buscarcontas, contas } from "./titular";

class Conta {
    constructor(agencia, numero, saldo, numeroConta, titular,) {
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = saldo;
        this.numeroConta = numeroConta;
        this.titular = titular;

    }
    traferir(conta1, conta2) { }

    saque(valor) { }

    deposito(valor) { }

    investimento(valor) { }

    extrato(saldo) { }

    autenticar(numeroConta, agencia, senha) { let Contas = buscarcontas } buscarcontas(titulares) {
        console.log(buscarcontas)
    }




    cobrarTaxa(saldo) { }


}

function buscarcontas() {
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

    let contas = [c1, c2, c3]
}




export { Conta, buscarcontas };
