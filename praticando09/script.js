function verificar() {
    let numero = document.getElementById('txtano')
    let res = document.getElementById('res')
    let n = Number(numero.value)
    if (numero.value.length == 0) {
        window.alert('porfavo digite o número')
    } 
    else {
     if (n % 2 == 0) {
        res.innerHTML = `numero ${n} é PAR`
     }
     else {
        res.innerHTML = `numero ${n} é IMPAR`
     }
       
    }
}