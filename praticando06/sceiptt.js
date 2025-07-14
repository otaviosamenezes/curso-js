function carregar() {
    var msg = document.getElementById('res')
    var img = document.getElementById('imagem')
    var resh  = document.getElementById('ress')
    var data = new Date()
    var hora = 7
    msg.innerHTML = `São ${hora} horas`
    if (hora == 0) {
         img.src = 'meianoiteee.png' 
          document.body.style.background = 'rgb(27, 13, 5)' 
          resh.innerHTML = 'Meia Noite' 
    }
     else if (hora >= 1 && hora <= 5) {
        img.src = 'madrugadaaa.png'
         document.body.style.background = 'black'
         resh.innerHTML = 'Madrugada' 
    }
     else if (hora > 6 && hora <= 12) {
        img.src = 'dia.png'
        document.body.style.background = 'rgb(255, 196, 0)'
        resh.innerHTML = 'Bom dia!' 
    }
    else if (hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(153, 93, 10)'
        resh.innerHTML = 'Boa tarde!' 
    }
    else if (hora <= 23) {
        img.src = 'noite.png'
         document.body.style.background = 'rgb(16, 18, 74)'
         resh.innerHTML = 'Boa noite' 
    }
}