function somar() {
    let prim = document.getElementById('txtano')
    let fim = document.getElementById('txtane')
    let passe = document.getElementById('passe')
    let res = document.getElementById('res')

    if (prim.value.length == 0) {
        window.alert('porfavo digite o INICIO:')
        res.innerHTML = '[ERRO...]'
    }
    else if (passe.value.length == 0) {
        window.alert('porfavor coloque o PASSO:')
         res.innerHTML = '[ERRO...]'
    }
    else if (fim.value.length == 0) {
        window.alert('porfavor coloque o FIM:')
         res.innerHTML = '[ERRO...]'
    }

    else {
        let prime = Number(prim.value)
        let fimm = Number(fim.value)
        let passi = Number(passe.value)
      if (passi <= 0) {
        window.alert('passo invalido, comsiderando passo 1')
    }
        res.innerHTML = ''
       if (prime < fimm) {
        while(prime <= fimm) {
            res.innerHTML += `👉${prime}`
            prime += passi
        }
       }
       else {
        while (prime >= fimm) {
            res.innerHTML += `👉${prime}`
            prime -= passi
        }
       }
        res.innerHTML += `🏴`
    }
}