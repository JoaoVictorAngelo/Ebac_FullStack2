let meuMap = new Map();
meuMap.set("nome", "Joao"); // Adiciona um par chave-valor ao Map
meuMap.set("stack", "HTML, CSS, JS"); // Adiciona um par chave-valor ao Map
meuMap.set("idade", 27); // Adiciona mais um par chave-valor

console.log(meuMap); 
// Resposta: Map(2) { 'nome' => 'Joao', 'idade' => 27 } 
// (recupera todo o conteúdo do Map)

const nome = meuMap.get("nome"); // Obtém o valor associado à chave "nome"
const idade = meuMap.get("idade"); // Obtém o valor associado à chave "idade"

console.log(nome, idade);
// Resposta: Após armazenar as chamadas meuMap.get em uma variável, 
// conseguimos a resposta apenas do valor correspondente à chave específica.
// Saída: "Joao 27"

console.log(meuMap.size)

console.log(meuMap.has("nome"))

console.log(meuMap.size)

// Keys recuperando as chaves 
for (let chave of meuMap.keys()){
    console.log(chave)//Resposta: [nome] [stack] [idade]
}

// value recuperando os valores  
for (let valor of meuMap.values()){
    console.log(valor)//Resposta: [Joao] [HTML, CSS, JS] [27]
}

// entries recuperando as Entradas do map  
for (let entrada of meuMap.entries()){
    console.log(entrada)//Resposta: [ 'nome', 'Joao' ] [ 'stack', 'HTML, CSS, JS' ] [ 'idade', 27 ]
}

//Delete foi usado para aparagar a entrada [stack]
meuMap.delete("stack")
console.log(meuMap)
//Resoosta: Map(2) { 'nome' => 'Joao', 'idade' => 27 }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Criando um conjunto (Set) vazio
const cpfs = new Set(); 

// Adicionando CPFs ao conjunto (valores únicos)
cpfs.add('80896037851');
cpfs.add('97602273800');
cpfs.add('02523246848');

console.log(cpfs); // Exibe todos os CPFs armazenados no Set

console.log(cpfs.keys()); // Retorna um iterador com as chaves (no Set, as chaves são os próprios valores)
console.log(cpfs.values()); // Retorna um iterador com os valores do Set (igual ao .keys())

cpfs.forEach((valor) => {
    console.log(valor)
})

// Set, removendo itens dublicados do array, adicionando uma nova const como set, e set nao permite array duplicados
//Um se set nao é um array 
const array = ['Pedro Paulo','Matheus Marcos', 'Felipe Fernandez', 'Denis Daniel', 'Denis Daniel','Felipe Fernandez']
const arrayComoSet = new Set([...array])
console.log(arrayComoSet)
/* Resposta:
Set(4) {
    'Pedro Paulo',
    'Matheus Marcos',
    'Felipe Fernandez',
    'Denis Daniel'
} 
*/

// passando Set para um array

const arraySemItemDublicado = [...arrayComoSet]

console.log(arraySemItemDublicado)
//Reposta: [ 'Pedro Paulo', 'Matheus Marcos', 'Felipe Fernandez', 'Denis Daniel' ]