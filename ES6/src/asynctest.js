class Produtos {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    exibirProdutos(){
        console.log(`ID: ${this.id}, Nome: ${this.nome}, Preco: ${this.preco}`)
    }
}

// criando instancias de produtos

const produto1 = new Produtos(1, "Teclado", 250)
const produto2 = new Produtos(2, "Notebook", 3500)
const produto3 = new Produtos(3, "Mouse", 150)

const produtos = [produto1, produto2, produto3]
console.log(produtos)


// funcao para procurar se existe um id

function buscarId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        const produto = produtos.find(item => item.id === id)
        if (produto) {
            resolve(produto)
        } else {
            reject("Produto nao encontrado")
        }
        },2000)

    })
}

buscarId(5)
    .then(produto => console.log(produto))
    .catch(erro => console.log(erro))