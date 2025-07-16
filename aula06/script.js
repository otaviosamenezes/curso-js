function carregar() {
    let msg = document.getElementById('res')
    let img = document.getElementById('imagem')
    let rs = document.getElementById('rr')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `são ${hora} horas`
    if (hora <= 12) {
        img.src = 'dia.png'
        document.body.style.background = 'rgb(193, 147, 40)'
        rs.innerHTML = 'BOM DIA!'
    }
    else if (hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(219, 112, 47)'
        rs.innerHTML = 'BOA TARDE!'
    }
    else if (hora <= 23) {
        img.src = 'noite.png'
        document.body.style.background = 'black'
        rs.innerHTML = 'BOA NOITE!'
    }
}