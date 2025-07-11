function carregar() {
    var msg = document.getElementById('res')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 19
    msg.innerHTML = `São ${hora} horas`
    if (hora <= 12) {
        img.src = 'dia.png'
        document.body.style.background = 'rgb(184, 204, 57)'
    }
    else if (hora <= 18) {
             img.src = 'tarde.png'
             document.body.style.background = 'rgb(204, 143, 57)'
    }
    else if (hora <= 23) {
         img.src = 'noite.png'
         document.body.style.background = 'rgb(16, 19, 68)'
    }
}