class Pessoa { 
    // As propriedades da classe devem ser declaradas antes do constructor
    nome: string;   // Pública por padrão, pode ser acessada de qualquer lugar
    renda?: number; // Também pública, mas opcional (pode ser undefined)

    // O constructor inicializa os valores das propriedades
    constructor (nome: string, renda?: number) {    
        this.nome = nome;
        this.renda = renda;
    }

    // Método público que retorna uma string
    dizOla(): string {
        return `${this.nome}, diz Olá`; 
    }
}

// Criamos outra classe para representar uma conta bancária
class ContaBancaria {
    protected saldo: number = 0; // `protected`: pode ser acessado por classes filhas, mas não fora delas
    public numeroDaConta: number; // `public`: pode ser acessado de qualquer lugar

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }

    // Método `static`: pertence à classe, não a um objeto específico
    static retornaNumeroDoBanco() {
        return 123;
    }

    // Método `private`: só pode ser acessado dentro desta classe
    private getSaldo() {
        return this.saldo;
    }

    // Método `public`: pode ser acessado por qualquer código que tenha acesso ao objeto
    depositar(valor: number){
        this.saldo += valor;
    }
}

// Criamos uma classe que herda de ContaBancaria
class ContaBancariaPessoaFisica extends ContaBancaria {
    // Sobrescrevendo o método depositar para alterar o comportamento
    depositar(valor: number): void {
        this.saldo = valor * 2 // `saldo` pode ser acessado porque é `protected`
    }
}

// Criamos uma conta bancária
const contaDoPedro = new ContaBancariaPessoaFisica(123321);

// Acessando método estático diretamente da classe
ContaBancaria.retornaNumeroDoBanco();
