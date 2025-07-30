let num = [3, 4, 2, 6, 5]
num.push(8)
num.sort()
let v = num.indexOf(8)
console.log(`nosso vetor é o ${num}`) 
console.log(`comprimento é ${num.length}`)
if (v == -1) {
    console.log('não tem esse número')
}else {
    console.log(`número encontrado foi na posição : ${v}`)
}

console.log("--------------------------------")

 for (let n = 0;n < num.length;n ++) {
    console.log(`${num[n]} : ${n}`)
 }

 console.log('----------------------------------')


 for(let p in num) {
    console.log(`${num[p]} : ${p}`)
 }