/* Escreva um programa JavaScript para encontrar a área de um triângulo onde os comprimentos dos três lados são 5, 6, 7. */

let a = 5
let b = 6
let c = 7

function areadoT(Area) {

    perimetro = (a + b + c) / 2

    return Area = Math.sqrt(perimetro * (perimetro - a) * (perimetro - b) * (perimetro - c))

}

console.log(areadoT().toFixed(2))