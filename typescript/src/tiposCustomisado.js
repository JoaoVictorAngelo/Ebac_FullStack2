"use strict";
// Criando um array de alunos, onde cada elemento é do tipo 'aluno'
const alunos = [
    {
        nome: "Carlos", // nome do aluno Carlos
        cursos: ["Front-end", "UI/UX"], // cursos que Carlos está fazendo
        idade: 27, // idade de Carlos
    },
    {
        nome: "Ana", // nome do aluno Ana
        cursos: ["Front-end", "Python"], // cursos que Ana está fazendo
        idade: 27, // idade de Ana
    }
];
// Adicionando um novo aluno ao array 'alunos' usando o método 'push'
alunos.push({
    nome: "Pedro", // nome do novo aluno Pedro
    cursos: ["Back-end", "Java"], // cursos que Pedro está fazendo
    idade: 21 // idade de Pedro
});
// Criando um novo aluno sem a propriedade 'cursos' (porque é opcional)
const novoAluno = {
    nome: "Joao", // nome do novo aluno Joao
    idade: 16, // idade de Joao
};
// Função que exibe o nome do aluno passado como argumento
function exibeAluno(aluno) {
    console.log(aluno.nome); // imprime o nome do aluno no console
}
// Percorrendo o array 'alunos' com o método 'forEach' e chamando a função 'exibeAluno' para cada aluno
alunos.forEach(exibeAluno); // Imprime: Carlos, Ana, Pedro
// Se quisermos adicionar 'novoAluno' ao array e exibir também, podemos fazer o seguinte:
alunos.push(novoAluno); // Adiciona 'novoAluno' ao array
alunos.forEach(exibeAluno); // Imprime: Carlos, Ana, Pedro, Joao
