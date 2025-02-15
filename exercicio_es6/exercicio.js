const alunos = [
    { nome:"Paula", nota: 1},
    { nome:"Pedro", nota: 2},
    { nome:"Livia", nota: 3},
    { nome:"Tomaz", nota: 4},
    { nome:"Julian", nota: 5},
    { nome:"Lais", nota: 6},
    { nome:"humberto", nota: 7},
    { nome:"Juan", nota: 8},
    { nome:"Thiago", nota: 9},
    { nome:"thiffany", nota: 10},
];

function alunosAprovados(alunos){
    return alunos.filter(alunos => alunos.nota >= 6);
}

console.log(alunosAprovados(alunos))