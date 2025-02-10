class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}


class Carro extends Veiculo {
    constructor(marca, modelo, ano, numeroDePortas) {
        super(marca, modelo, ano);
        this.numeroDePortas = numeroDePortas;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Número de portas: ${this.numeroDePortas}`);
    }
}


class Caminhao extends Veiculo {
    constructor(marca, modelo, ano, cargaMaxima) {
        super(marca, modelo, ano);
        this.cargaMaxima = cargaMaxima;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Carga máxima: ${this.cargaMaxima} kg`);
    }
}


const carro1 = new Carro("Toyota", "Corolla", 2023, 4);
const carro2 = new Carro("Honda", "Civic", 2022, 4);
const caminhao1 = new Caminhao("Mercedes", "Actros", 2022, 30000);
const caminhao2 = new Caminhao("Volvo", "FH", 2023, 32000);


carro1.exibirDetalhes();
carro2.exibirDetalhes();
caminhao1.exibirDetalhes();
caminhao2.exibirDetalhes();
