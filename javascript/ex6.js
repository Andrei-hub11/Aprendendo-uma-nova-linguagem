var array = [1, 2, 3, 4, 5, 6]

function recursive(array) {

    if (array.length == 1) {
        return 1
    } else
        return array.pop() + recursive(array)


}

console.log(recursive(array))