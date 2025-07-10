 
function verificar() {
 var data = new Date()
 var ano = data.getFullYear()
 var fano = window.document.getElementById('txtano')
 var res = window.document.getElementById('res')

 if (fano.value.length == 0 || fano.value > ano) {
    window.alert('Verifique os dados e tente novamente!')
 }
 else {
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 & idade < 10) {
            img.setAttribute('src', 'bebeE.png')
        }
        else if ( idade < 21) {
            img.setAttribute('src', 'jovemE.png')
        }
        else if (idade < 50) {
            img.setAttribute('src', 'adultoE.png')
        }
        else {
            img.setAttribute('src', 'velhooE.png')
        }
    }
    else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 & idade < 10) {
            img.setAttribute('src', 'bebeAA.png')
        }
        else if ( idade < 21) {
            img.setAttribute('src', 'jovemA.png')
        }
        else if (idade < 50) {
            img.setAttribute('src', 'adultaA.png')
        }
        else {
            img.setAttribute('src', 'velhaA.png')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}



}