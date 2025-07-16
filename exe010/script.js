function somar() {
    let numero = document.getElementById('txtano')
    let res = document.getElementById('res')
    let num = Number(numero.value)
    res.innerHTML = ''
    if (numero.value.length == 0) {
      window.alert('porfavor digite um numero')  
    }
    else {
       let i = 1
        while (i <= 10) {
            res.innerHTML += `${num} X ${i} = ${num * i}</br>`
            i++
        }
    }
}