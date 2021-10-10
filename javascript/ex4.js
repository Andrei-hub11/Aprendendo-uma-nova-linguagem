/* Crie uma função recursiva*/

function recursive(n) {
    console.log(n)

    for (let a = 0; a < n; a++) {
        n2 = n - 1

    }
    if (n2 > 0) {
        recursive(n2)
    }
}

recursive(5)