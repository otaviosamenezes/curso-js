let valores = [8, 1, 7, 4, 2, 9]
// console.log(valores[0])
// console.log(valores[1])
// console.log(valores[2])
// console.log(valores[3])
// console.log(valores[4])
// console.log(valores[5])

//     for(s = 0;s < valores.length;s ++) {
//     console.log(`a posição ${s} tem o valor ${valores[s]}`)
//  }
// let pos = 0
// while (pos < valores.length) {
//     console.log(valores[pos])
//     pos ++
// }

for(let pos in valores) {
    console.log(valores[pos])
}