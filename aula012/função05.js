function fatorial(n) {
    let fat = 1
    let c = n
    while (c > 1) {
        fat = fat * c
        c--
    }
    return fat
}
console.log(fatorial(5))