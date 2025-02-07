// Definição da função construtora "Pessoa"
function Pessoa (nome) {
    this.nome = nome; // Define o nome da pessoa
    this.dizOla = function() { // Método que exibe uma saudação
        console.log(this.nome + " diz Olá");
    }
}

// Definição da função construtora "Funcionario" que herda de "Pessoa"
function Funcionario(nome, cargo, salario) {
    this.cargo = cargo; // Define o cargo do funcionário
    // this.salario = salario; // Define o salário do funcionário
    
    let _salario = salario;

    // acessando salario Funcao Privada
    this.getSalario = function() {
        return _salario;
    }

    // atribuindo salario Funcao Privada
    this.setSalario = function(valor) {
        if (typeof valor === 'number')
        _salario = valor;
    }
    
    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }
    
    this.dizCargo = function() { // Método que exibe o cargo
        console.log(this.cargo);
    }
        // Aqui está a herança!
        // O método "call()" executa a função "Pessoa" e passa o contexto (this) para "Funcionario"
    Pessoa.call(this, nome); 
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiário", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    };
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    };
}

// Criando um objeto do tipo "Funcionario"
const funcionario1 = new Funcionario("Maria", "Gerente", 5000);
const funcionario2 = new Estagiario("Pedro");   
const funcionario3 = new Gerente("Mathias");



funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3.getSalario())