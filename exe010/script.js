function somar() {
    var numero = document.getElementById('txtano')
    var res = document.getElementById('res')
    var num = Number(numero.value)
    res.innerHTML = ''
    if (numero.value.length == 0) {
      window.alert('porfavor digite um numero')  
    }
    else {
       var i = 1
        while (i <= 10) {
            res.innerHTML += `${num} X ${i} = ${num * i}</br>`
            i++
        }
    }
}