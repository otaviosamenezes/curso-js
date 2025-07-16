function somar() {
    let numero = document.getElementById('txtano')
    let tab = document.getElementById('selec')
    if (numero.value.length == 0) {
        window.alert('porfavo deigite o número')
    }
    else {
       let n = Number(numero.value)
       let c = 1
       tab.innerHTML = ''
       while (c <= 10) {
       let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
       tab.appendChild(item)
       c++
    }
}
}