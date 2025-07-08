var agora = new Date()

var hora = agora.getHours()
console.log(`agora são exatamnete ${hora} horas`)
if (hora == 0) {
    console.log('meia noite')
}
 else if (hora <= 5) {
console.log('Boa Madrugada')
}
 else if (hora <= 12) {
    console.log('Bom dia!')
}

else {
    if (hora <= 18 ) {
        console.log('Boa tarde!')
    }
    else if (hora <= 23) {
        console.log('boa noite!')
    }

   
}

