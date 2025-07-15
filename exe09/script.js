function contar() {
  var prim = document.getElementById('txtano')  
  var fim = document.getElementById('txtane')
  var passe = document.getElementById('passe')
  var res = document.getElementById('res')
  if (prim.value.length == 0 || fim.value.length == 0) {
    window.alert('Vereficar os dados e tente novamente')
  }
       else if (passe.value.length == 0) {
       window.alert('Vereficar os dados e tente novamente..')
   }
  else {
    var primei = Number(prim.value)
    var fimm = Number(fim.value)
    var passi = Number(passe.value)
    res.innerHTML = ''
    while (primei <= fimm) {
        res.innerHTML += `👉${primei}`
        primei += passi
    }
  }
}