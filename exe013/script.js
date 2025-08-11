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
      item.text = `Valor ${numero.value} foi adicionado`
      lista.appendChild(item)
      res.innerHTML = ''
     }else{
       window.alert('Valor ivalido ou já encontrado na lista.')
     }
     numero.value = ''
     numero.focus()
  }
   function finalizar() {
        if (valores.length == 0) {
            window.alert('Adicionar valores antes de finalizar.')
        }else {
            let total = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores) {
                  soma += valores[pos]
                if(valores[pos] > maior) {
                    maior = valores[pos]
                }else if (valores[pos] < menor) {
                    menor = valores[pos]
                }
            }
         respos = soma / total
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrado.</p>`
            res.innerHTML += `<p>Maior valor informado foi ${maior}</p>`
            res.innerHTML += `<p>Menor valor infomado foi ${menor}</p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
             res.innerHTML += `<p>A Media todos os números é ${respos}</p>` 
        }
        }
  