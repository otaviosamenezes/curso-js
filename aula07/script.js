 
function carregar() {
    var msg = window.document.getElementById('msg')
    var imgs = window.document.getElementById('imagem')
    var re = window.document.getElementById('rs')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `são ${hora} horas`
    if (hora <= 12) {
        imgs.src = 'dia.png'
        document.body.style.background = 'rgb(215, 190, 63)'
        re.innerHTML = 'Bomdia!'
    }
    else if (hora <= 18) {
        imgs.src = 'tarde.png'
        document.body.style.background = 'rgb(199, 111, 61)'
        re.innerHTML = 'Boa tarde!'
    }
    else if (hora <= 23) {
        imgs.src = 'noite.png'
        document.body.style.background = 'rgb(12, 24, 42)'
        re.innerHTML = 'Boa noite!'
    }
}