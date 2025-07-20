function verificar() {
    let numero = document.getElementById('txtano')
    let res = document.getElementById('res')
    let data = new Date()
    let ano = data.getFullYear()
     let n = Number(numero.value)
    if (numero.value.length == 0 || numero.value > ano) {
        window.alert('Porfavor verifica os dados tente novamente. ')
    }
    else {
        let idade = ano - n
        let texto = document.createElement('p')
        texto.setAttribute('id', 'idade')
        texto.innerHTML = `Você tem ${idade} anos`
         let img = document.createElement('img')
        img.setAttribute('id', 'foto')
         if (idade <= 10) {
            img.setAttribute('src', 'bebeE.png')
         }
         else if (idade <= 29) {
            img.setAttribute('src', 'jovemE.png')
         }
         else if (idade <= 60) {
            img.setAttribute('src', 'adultoE.png')
         }
         else {
            img.setAttribute('src', 'velhooE.png')
         }
         res.innerHTML = ''
         res.appendChild(texto)
          res.appendChild(img)
    }
}