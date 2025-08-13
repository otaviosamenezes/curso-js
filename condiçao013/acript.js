function verificar() {
    let pais = document.getElementById('pais')
    let res = document.getElementById('res')
    let p = String(pais.value)
    res.innerHTML = ''
    if (p == 0) {
        window.alert('Pofavor digite nome seu pais')
    }
    else {
    if (p == 'Brasil') {
        res.innerHTML = `<p>Você é do ${p}</p>`
        res.innerHTML += '<p>Brasileiro</p>'
    }else {
        res.innerHTML += `<p>Você é do ${p}</p>`
        res.innerHTML += '<p>estranjeiro</p>'
    }
}
}

