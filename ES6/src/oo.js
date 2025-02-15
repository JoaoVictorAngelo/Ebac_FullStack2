class Dragonbal {
    #hp = 100;
    #forca = 100;
    #transformado = false
    constructor(nome, especie){
        this.nome = nome;
        this.especie = especie;
    }

    setNome(novoNome){
        this.nome = novoNome
    }

    atacar(nomeDoAtaque){
        let dano = 10
        
        if (this.#transformado && this.#forca <= 91) {
            this.desfazerTransformacao();
        }

        if (this.#transformado) {
            dano *= this.#forca / 100
            this.#forca -= 20
            console.log(`${this.nome} atacou usando ${nomeDoAtaque} , e está transformado causou: ${dano} de dano, voce esta com ${this.#forca}:FORÇA`)
        }else {
            this.#forca -= 10
            console.log(`${this.nome} atacou usando ${nomeDoAtaque} e causou: ${dano} de dano`)
        }
    }

    receberDano(){
        this.#hp -= 20;

        if (this.#transformado) {
            this.#hp -=10
            console.log(`Voce recebeu dano Transformado seu HP: ${this.#hp}`)
        }else {
            console.log(`Recebeu Dano seu HP: ${this.#hp}`)
        }
    }

    mostrarHp(){
        console.log(`Seu HP: ${this.#hp}`)
    }

    mostrarForca(){
        console.log(`Sua FORÇA: ${this.#forca}`)
    }

    getForca(){
        return this.#forca
    }

    aumentarForca(porcentagem) {
        this.#forca = Math.floor(this.#forca * (1 + porcentagem / 100));

        if (this.#forca < 70) {
            this.desfazerTransformacao()
        }
    }
    
    transformarSsj() {
        this.aumentarForca(90);
        this.#transformado = true;
        console.log(`${this.nome} se transformou em SUPER SAYAJIN! Sua força agora é ${this.getForca()}.`);
    }

    desfazerTransformacao() {
        this.#transformado = false;
        console.log(`${this.nome} voltou à sua forma normal.`);
    }
}


class Sayadins extends Dragonbal {
    constructor(nome){
        super(nome, "Sayadin")
    }
}

const goku = new Sayadins()

goku.setNome("Goku")


console.log('------------------------------------------------------------------------------------------------------------')
goku.mostrarForca()
goku.mostrarHp()
console.log('------------------------------------------------------------------------------------------------------------')

goku.atacar('Kamehamehaaaa')
console.log('------------------------------------------------------------------------------------------------------------')

goku.mostrarForca()
console.log('------------------------------------------------------------------------------------------------------------')


goku.receberDano()
console.log('------------------------------------------------------------------------------------------------------------')


goku.transformarSsj()
console.log('------------------------------------------------------------------------------------------------------------')


goku.atacar('Big Kamehamehaaaa')
console.log('------------------------------------------------------------------------------------------------------------')

goku.atacar('Big Kamehamehaaaa')
console.log('------------------------------------------------------------------------------------------------------------')

goku.atacar('Big Kamehamehaaaa')
console.log('------------------------------------------------------------------------------------------------------------')

goku.atacar('Big Kamehamehaaaa')
console.log('------------------------------------------------------------------------------------------------------------')

goku.atacar('Big Kamehamehaaaa')
console.log('------------------------------------------------------------------------------------------------------------')

goku.atacar('Big Kamehamehaaaa')
console.log('------------------------------------------------------------------------------------------------------------')

goku.atacar('Big Kamehamehaaaa')
console.log('------------------------------------------------------------------------------------------------------------')


