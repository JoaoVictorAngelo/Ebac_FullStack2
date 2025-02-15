// Função síncrona que realiza um loop pesado
function funcaoMuitoPesada() {
    let execucoes = 0; // Inicializa o contador de execuções
    for (let i = 0; i < 1000000000; i++) {
        execucoes++; // Incrementa o contador a cada iteração
    }
    return execucoes; // Retorna o total de execuções após o loop
}

// Promise que encapsula a função pesada
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0; // Inicializa o contador de execuções
        for (let i = 0; i < 1000000000; i++) {
            execucoes++; // Incrementa o contador a cada iteração
        }
        resolve(execucoes); // Resolve a Promise com o total de execuções
    } catch (e) {
        reject('Deu erro na iteração dos números'); // Rejeita a Promise em caso de erro
    }
});

// Função que retorna uma Promise com parâmetros
const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuario: ${login}`); // Resolve a Promise após 3 segundos
        }, 3000);
    });
};

// Função assíncrona principal para execução do código
async function execucaoPrincipal() {
    console.log("inicio"); // Exibe "inicio" no console

    // Executa a promiseComParametros e exibe o resultado
    promiseComParametros('joao@gmail.com', 123321).then(resultado => {
        console.log(resultado); // Exibe o resultado da Promise
    });

    try {
        // Aguarda a resolução da funcaoMuitoPesadaPromise
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado); // Exibe o resultado da Promise
    } catch (e) {
        console.log(e); // Exibe o erro, caso ocorra
    }

    console.log("fim"); // Exibe "fim" no console
}

// Chama a função assíncrona para iniciar a execução
execucaoPrincipal();