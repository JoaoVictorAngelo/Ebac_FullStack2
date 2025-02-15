//rest

function somar(){
    let soma = 0
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma
}
console.log(somar(3, 20, 27))

function somarComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total
    },0)
}

console.log(somar(3, 20, 27))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//spread

const numeros = [1,2,3,4]
console.log(...numeros)// resposta: 1 2 3 4

const timesDeFutebolSp = ['Santos', 'Corinthians', 'Palmeiras', 'Sao Paulo'];
const timesDeFutebolRj = ['Flamengo', 'Botafogo', 'Fluminense', 'Vasco'];

const timesDeFutebol = timesDeFutebolSp.concat(timesDeFutebolRj)

console.log(timesDeFutebol)
/* Resposta: 
    [
    'Santos',
    'Corinthians',
    'Palmeiras',
    'Sao Paulo',
    'Flamengo',
    'Botafogo',
    'Fluminense',
    'Vasco'
    ]
*/



const timesDeFutebol2 = [...timesDeFutebolSp, ...timesDeFutebolRj]

console.log(timesDeFutebol2)
/* Resposta: 
    [
    'Santos',
    'Corinthians',
    'Palmeiras',
    'Sao Paulo',
    'Flamengo',
    'Botafogo',
    'Fluminense',
    'Vasco'
    ]
*/

const [item1, item2, item3, ...OutrosTimes] = timesDeFutebol
console.log(item1) //Resposta: Santos
console.log(item2) //Resposta: Corinthians
console.log(item3) //Resposta: Palmeiras
console.log(OutrosTimes)//Resposta: Restante dos times

const carroDaJulia = {
    carro: 'Fox',
    marca: 'Vw',
    motor: '1.0'
}

const carroDaMaria = {
    ...carroDaJulia,
    motor: '1.6'
}

console.log(carroDaJulia, carroDaMaria)
//Resposta: { carro: 'Fox', marca: 'Vw', motor: '1.0' } { carro: 'Fox', marca: 'Vw', motor: '1.6' }


// Desestruturação

const { motor: motorCarroJulia } = carroDaJulia;
const { motor: motorCarroMaria } = carroDaMaria;

console.log(motorCarroJulia, motorCarroMaria)
//Resposta 1.0 1.6

