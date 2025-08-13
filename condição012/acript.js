function verificar() {
 let vel = document.getElementById('vel')
 let res = document.getElementById('res')
 let velocidade = Number(vel.value)
 if (velocidade > 60) {
    res.innerHTML = `Você correu ${velocidade}km/h MULTADO`
 }
 else {
    res.innerHTML = `Você correu ${velocidade}km/h dirija com segurança`
 }
}