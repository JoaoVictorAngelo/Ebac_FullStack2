// Classe base Conta
class Conta {
    numeroDaConta: number; // Número da conta, acessível publicamente
    saldo: number = 0; // Saldo inicializado como 0

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta; // Define o número da conta ao criar um objeto
    }
}

// ContaSalario herda de Conta
class ContaSalario extends Conta {
    // Método para depositar um valor na conta
    depositar(valor: number) {
        this.saldo += valor;
    }
}

// Interface ITransacional define um contrato para transações
interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean; // Método que retorna um booleano
    taxaTransferencia: number; // Propriedade obrigatória para taxa de transferência
}

// Interface IExemplo2 herda de ITransacional e adiciona a propriedade cnpj
interface IExemplo2 extends ITransacional {
    cnpj: number;
}

// Interface IExemplo3 herda de IExemplo2 e adiciona telefone
interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

// ContaCorrente herda de Conta e implementa ITransacional
class ContaCorrente extends Conta implements ITransacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia); // Desconta taxa antes de transferir
        return true; // Retorna true indicando que a transferência foi bem-sucedida
    };
    taxaTransferencia: number = 0; // Define taxa inicial como 0
}

// Criando um objeto que deveria seguir a interface ITransacional
//const ContaDaMaria: ITransacional = {
    // ERRO: O objeto está vazio, mas deveria ter os métodos e propriedades exigidos pela interface
//};
