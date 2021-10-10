/* Crie uma função para verificar se um ano bissexto */

function anoB(a) {
    return (a % 100 === 0) ? (a % 400 === 0) : (a % 4 === 0)
}

console.log(anoB(1600))
console.log(anoB(1900))
console.log(anoB(1700))
console.log(anoB(2000))