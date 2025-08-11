let num = document.getElementById('txtano')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function insnumero(n) {
 if(Number(n) >= 1 && Number(n) <= 100) {
    return true
 }
 else {
    return false
 }
}
function inslista(n, l) {
 if (l.indexOf(Number(n)) != -1) {
    return true
 }
 else {
    return false
 }
}

function adicionar() {
    if (insnumero(num.value) && ! inslista(num.value, valores)) {
    valores.push(Number(num.value))
    let caixa = document.createElement('option')
    caixa.text = `valor ${num.value} foi adicionado`
    lista.appendChild(caixa)
    res.innerHTML = ''
    }
    else {
        window.alert('Valor invalido ou já digitado...')
    }
    num.value = ''
    num.focus()
}
 function finalizar() {
    if (valores.length == 0) {
        window.alert('Adiciona número antes de finalizar')
    }
    else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos = 0;pos < valores.length;pos++) {
            soma = soma + valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            else if (valores[pos] < menor) {
                    menor = valores[pos]
                }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>foram ${total} valores cadatrado</p>`
        res.innerHTML += `<p>Número maior foi ${maior}</p>`
        res.innerHTML += `<p>Número menor foi ${menor}</p>`
        res.innerHTML += `<p>Soma todos valores foi ${soma}</p>`
        res.innerHTML += `<p>A média dos valores foi ${media}</p>`
    }
 }