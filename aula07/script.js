function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0) {
        window.alert('porfavor digite seu ano')
    }
    else {
        let fsex = document.getElementsByName('radex')
        let idade = ano - Number(fano.value)
        let genero = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 10) {
                img.setAttribute('src', 'bebeE.png')
            }
            else if (idade <= 29) {
                img.setAttribute('src', 'jovemE.png')
            }
            else if (idade <= 50) {
                img.setAttribute('src', 'adultoE.png')
            }
            else {
                img.setAttribute('src', 'velhooE.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <= 10) {
                img.setAttribute('src', 'bebeAA.png')
            }
            else if (idade <= 29) {
                img.setAttribute('src', 'jovemA.png')
            }
            else if (idade <= 50) {
                 img.setAttribute('src', 'adultaA.png')
            }
            else {
                 img.setAttribute('src', 'velhaa.png')
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}