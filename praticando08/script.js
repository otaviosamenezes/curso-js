function verificar() {
    let idade = document.getElementById('txtano')
    let res = document.getElementById('res')
    let idades = Number(idade.value)
    
    if (idade.value.length == 0) {
        window.alert('porfavo digite sua idade')
    }
    else {
        if (idades <= 15) {
            res.innerHTML = `Você tem ${idades}, não pode vota.`
        }
        else if (idades < 18 || idades > 65) {
            res.innerHTML = `Você tem ${idades}, pode votar. </br>
            (voto opicional)`
        }
        else if (idades < 50) {
            res.innerHTML = `Você tem ${idades}, pode votar. </br>
            (voto obrigatorio)`
        }
    }
}