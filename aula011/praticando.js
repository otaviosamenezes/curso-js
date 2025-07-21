let num = [7, 4, 9, 3, 2]
num[5] = 8
num.sort()
let n = num.length
console.log(num)
console.log(`são ${n} posições`)

// for(let pos = 0;pos < num.length;pos ++) {
//     console.log(`as posições ${pos} os valores ${num[pos]}`)
// } 

// for(let pos in num) {
//     console.log(`posição ${pos} os valores ${num[pos]}`)
// }

let pos = 0
while (pos < num.length) {
    console.log(`posições ${pos} valores ${num[pos]}`)
    pos ++
}
let b = num.indexOf(9)
if (b == -1) {
    console.log('Não existe esse número')
}
else {
    console.log(`valor encontrado foi ${b}`)
}