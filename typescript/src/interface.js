"use strict";
// Classe base Conta
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0; // Saldo inicializado como 0
        this.numeroDaConta = numeroDaConta; // Define o número da conta ao criar um objeto
    }
}
// ContaSalario herda de Conta
class ContaSalario extends Conta {
    // Método para depositar um valor na conta
    depositar(valor) {
        this.saldo += valor;
    }
}
// ContaCorrente herda de Conta e implementa ITransacional
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0; // Define taxa inicial como 0
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia); // Desconta taxa antes de transferir
        return true; // Retorna true indicando que a transferência foi bem-sucedida
    }
    ;
}
// Criando um objeto que deveria seguir a interface ITransacional
//const ContaDaMaria: ITransacional = {
// ERRO: O objeto está vazio, mas deveria ter os métodos e propriedades exigidos pela interface
//};
