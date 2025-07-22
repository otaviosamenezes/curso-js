let bum = [5, 8, 3, 9, 4]
bum.push(1)
bum.sort()
let p = bum.length
console.log(bum)

console.log('')

console.log(`total de elementos é ${p}`)

console.log('forma burra ⬇️')

console.log(bum[0])
console.log(bum[1])
console.log(bum[2])
console.log(bum[3])
console.log(bum[4])
console.log(bum[5])


console.log('for ⬇️')



for(let pos = 0;pos < bum.length;pos ++) {
    console.log(`posição ${pos} elementos ${bum[pos]}`)
}


console.log('while ⬇️')


let gs = 0
while (gs < bum.length) {
    console.log(`elementos ${bum[gs]} posições ${gs}`)
    gs ++
}


console.log('do ⬇️')


let fa = 0
do {
    console.log(`posição ${fa} elementos ${bum[fa]}`) 
    fa ++
}while(fa < bum.length)


console.log('for:simplis ⬇️')


for(let fus in bum) {
    console.log(`elementos ${bum[fus]} posição ${fus}`)
}

console.log('')

console.log('Buacar valor dentro de um vetor⬇️')
let v = bum.indexOf(4)
console.log(`valor de 4 é : ${v}`)

console.log('')

console.log('Buscando valor dentro do vetor usando ➡️condições⬅️')

let vs = bum.indexOf(7)
if (vs == -1) {
    console.log('Não existe esse número.')
} else {
    console.log(`valor emcontrado foi: ${vs}`)
}

console.log('')