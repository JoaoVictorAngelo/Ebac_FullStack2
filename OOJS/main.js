// Criando um objeto literal chamado carroDoJoao
const carroDoJoao = {
    modelo: 'fiesta', // Modelo do carro
    fabricante: 'ford', // Fabricante do carro
    anoModelo: '2020', // Ano do modelo
    anoFabricacao: '2019', // Ano de fabricação
    acelerar: function() { // Método para acelerar o carro
        console.log("vrummmm"); // Imprime um som de aceleração
    }
}

// Criando outro objeto literal chamado carroDaMaria
const carroDaMaria = {
    modelo: 'ka',
    fabricante: 'ford',
    anoModelo: '2021',
    anoFabricacao: '2020', 
    acelerar: function() {
        console.log('vrumm po po po vruuuuuumm.....') 
    }
}

// Criando uma função construtora chamada Carro
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo; // Definindo a propriedade modelo
    this.fabricante = fabricante; // Definindo a propriedade fabricante
    this.anoModelo = anoModelo; // Definindo a propriedade anoModelo
    this.anoFabricacao = anoFabricacao; // Definindo a propriedade anoFabricacao
    this.acelerar = function() { // Método para acelerar
        console.log('vruum');
    }
}

// Criando objetos usando a função construtora
const carroDoJoao2 = new Carro('fiesta', 'ford', '2020', '2019');
const carroDaMaria2 = new Carro('ka','ford', '2021', '2020');

// Criando variáveis simples
const nome = 'joao'
const idade = 27
const eMaiorDeIdade = true
const conhecimentos = ['html', 'css', 'javascript'] // Criando um array com tecnologias

// Criando um objeto pessoa e atribuindo valores das variáveis criadas acima
const pessoa = {
    nome: nome, // Atributo nome recebendo a variável nome
    idade: idade, // Atributo idade recebendo a variável idade
    eMaiorDeIdade: eMaiorDeIdade, // Atributo booleano informando se é maior de idade
    conhecimentos: conhecimentos, // Atributo recebendo array de conhecimentos
}

// Criando uma função que exibe um atributo da pessoa a partir de um nome de propriedade
function exibeNome(nomeAtributo) {
    console.log(pessoa[nomeAtributo]); // Acessando dinamicamente o atributo do objeto
}
exibeNome('nome'); // Chamando a função e exibindo o nome

// Adicionando uma nova propriedade ao objeto pessoa
pessoa.sobrenome = undefined;

// Congelando o objeto pessoa para que ele não possa ser modificado
Object.freeze(pessoa);

// Tentativa de modificar o nome da pessoa (não terá efeito devido ao freeze)
pessoa.nome = 'bianca';

// Verificando se a propriedade sobrenome tem um valor válido
if (pessoa.sobrenome) {
    console.log('Voce tem sobrenome');
}

// Verificando se a propriedade sobrenome existe dentro do objeto
if ('sobrenome' in pessoa) {
    console.log('tem sobrenome');
}

// Exibindo o valor da propriedade nome de duas formas diferentes
console.log(pessoa.nome);
console.log(pessoa['nome']);

// Exibindo todos os valores do objeto pessoa em um array
console.log(Object.values(pessoa));