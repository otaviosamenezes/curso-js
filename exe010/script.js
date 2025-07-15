function somar() {
  var numero = document.getElementById('txtano')
  var res = document.getElementById('res')
  var num = Number(numero.value)
  res.innerHTML = ''
  if (numero.value.length == 0) {
    res.innerHTML = 'por favor digite um numero'
  }
  else {
    for ( i = 1;i <= 10;i++) {
      res.innerHTML += `${num} x ${i} = ${num * i}</br>`
    }
  }
}