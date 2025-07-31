function fatorial(f) {
    let fat = 1
    let c = f
    do {
        fat = fat * c
        c--
    }while(c > 1)
        return fat
}
console.log(fatorial(5))