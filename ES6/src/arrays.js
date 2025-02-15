const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

//Exemplo de maneira de percorrer o array
for(let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil nas rede social: ${redesSociais[i]}`);
    /* Resposta
        Eu tenho perfil nas rede social: Facebook
        Eu tenho perfil nas rede social: Instagram
        Eu tenho perfil nas rede social: Twitter
     */
}

//Percorre o array e nao tem retorno
redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`Eu tenho conta na rede social: #${indice}-${nomeDaRedeSocial}`)
        /* Resposta
            Eu tenho conta na rede social: #0-Facebook
            Eu tenho conta na rede social: #1-Instagram
            Eu tenho conta na rede social: #2-Twitter
        */
})

/////////////////////////////////////////////////////////////////////////////////

// Modificando itens do array usando .map
const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    return numeroAtual * 2;
})
console.log(dobroDosNumeros)

////////////////////////////////////////////////////////////////////////////////

const alunos = ['Pedro', 'Lucas', 'Maria', 'Carla']

// Criando arry de objeto utilizando .map 
const alunos2 = alunos.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual, // [0]Pedro [1]Lucas...
        curso: 'FrontEnd'
    }
    return itemAtual;
})

console.log(alunos2)
/* resposta [
    { nome: 'Pedro', curso: 'FrontEnd' },
    { nome: 'Lucas', curso: 'FrontEnd' },
    { nome: 'Maria', curso: 'FrontEnd' },
    { nome: 'Carla', curso: 'FrontEnd' }
    ] 
*/


// aqui usamos o .find para dizer "procure no array um objeto onde nome seja 'Maria'".
const paula = alunos2.find(function(item){
    return item.nome == "Maria" // retorna true ou false
})
console.log(paula) // Resposta { nome: 'Maria', curso: 'FrontEnd' }

// .findIndex para buscar onde o item está indexado
const indeceDaPaula = alunos2.findIndex(function(item){
    return item.nome == "Maria" // retorna true ou false
})
console.log(indeceDaPaula) // resposta 2
// caso a busca fosse um nome que nao tem index o retorno sero -1


// uso do .every aqui usamos o every para olhar todos os itens do array e comparamos se todos sao iguais 
const todosAlunosSaoDeFrontEnd = alunos2.every(function(item){
    return item.curso === 'FrontEnd'
})
console.log(todosAlunosSaoDeFrontEnd) // resposta true

// usando o .push para adicionar um novo aluno
alunos2.push({
    nome:'Mathias',
    curso: 'BackEnd'
})

// usando o .some para procurar se existe ao menos 1 item que aceite a condicional 
const existeAlgumAlunoDeBackEnd = alunos2.some(function(item){
    return item.curso === 'BackEnd'
})
console.log(existeAlgumAlunoDeBackEnd) // resposta true

// condicionando se ao menos 1 item contem 2 cursos  
const existeAlgumAlunoDeBackEndeFront = alunos2.some(function(item){
    return item.curso === 'BackEnd' && item.curso === 'FrontEnd'
})
console.log(existeAlgumAlunoDeBackEndeFront) // resposta falce


// cria uma funcao para dps ser usada dentro de filter
function filtraAlunosFront(aluno) {
    return aluno.curso === 'FrontEnd'
}

// usando o filter para mostrar quem sao as condicionais true e ignorando as falses
const alunosDeFront = alunos2.filter(filtraAlunosFront)

console.log(alunosDeFront)
/* resposta
    [
    { nome: 'Pedro', curso: 'FrontEnd' },
    { nome: 'Lucas', curso: 'FrontEnd' },
    { nome: 'Maria', curso: 'FrontEnd' },
    { nome: 'Carla', curso: 'FrontEnd' }
    ]
*/
// usando o reduce para concatenas todos os nomes dos alunos
const nomeDosalunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador
}, '')
console.log(nomeDosalunos)// resposta Pedro Lucas Maria Carla Mathias

/////////////////////////////////////////////////////////////////////////////////

const nums = [10, 20, 30, 5]
// usando reduce para somar todos os elementos do array e definindo o acumulador em 0
const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual
    return acumulador;
}, 0)
console.log(soma)// resposta 65

