var hora = new Date()
var agora = hora.getHours()
console.log(`São ${agora} Horas`)

 if (agora == 0) {
    console.log('Meia noite')
 }
  else if (agora < 5) {
    console.log('Boa madrugada!')
 }
 else if (agora < 12) {
    console.log('Bom dia!')
}
else if (agora < 18) {
    console.log('Boa tarde!')
}
else if (agora <= 23) {
    console.log('Boa noite!')
}