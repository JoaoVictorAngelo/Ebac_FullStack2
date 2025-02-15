const minhaFuncao = () => "Diz Olá";
console.log(minhaFuncao())


const retornaUmCarro = () => ({
    modelo: 'Fusca',
    fabricante: 'Volkwagem'
})

console.log(retornaUmCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function () {
        this.velocidadeAtual += 10
    },
    frear: () => {
        this.velocidadeAtual -= 10
    }
}