 let numero = document.getElementById('txtano')
 let lista = document.getElementById('flista')
 let res = document.getElementById('res')
 let valores = []

 function insnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
 }
  function inslista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

  }

  function adicionar() {
    if (insnumero(numero.value) && !inslista(numero.value, valores)) {
       valores.push(Number(numero.value))
       let item = document.createElement('option')
       item.text = `Valor ${numero.value} adicionado`
       lista.appendChild(item)
    }else{
        window.alert('Valor ivalido ou já encontrado na lista.')
    }
 
  }
