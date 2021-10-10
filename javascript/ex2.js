var n = Math.ceil(Math.random() * 3)

const nUsuario = prompt('Por favor, insira um número quue creia corresponder ao número gerado entre 1 e 10',)

if (nUsuario == n) {
    console.log('Bom trabalho')
} else {
    console.log('Número não correspondido' + nUsuario)
}
