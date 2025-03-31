
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

    autenticar(numeroConta,agencia,senha) { }

    cobrarTaxa(saldo) { }

}

export { Conta };