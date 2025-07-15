function somar() {
    var prim = document.getElementById('txtano')
    var fim = document.getElementById('txtane')
    var passe = document.getElementById('passe')
    var res = document.getElementById('res')

    if (prim.value.length == 0 || fim.value.length == 0) {
        window.alert('porfavo digite o número')
    }
    else if (passe.value.length == 0) {
        window.alert('porfavor coloque o passo')
    }
    else {
        var prime = Number(prim.value)
        var fimm = Number(fim.value)
        var passi = Number(passe.value)
        res.innerHTML = ''
        while (prime <= fimm) {
            res.innerHTML += `👉${prime}`
            prime += passi
        }
    }
}