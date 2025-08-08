let numero = document.getElementById('txtano') //aqui vai pegar valor você digitar.
let lista = document.getElementById('flista') //aqui é a lista do select, para adicionar algo nelas usa o ('opition')
let res = document.getElementById('res') //aqui onde vai aparecer o resultado de +, -, /, qual numero maior, qual menor
let valores = [] // aqui é uma array guarda varios valores em uma variavel

function insnumero(n) { // insnumero é função deu parametro pro (n) que agora tem valor dentro dele.
    if(Number(n) >= 1 && Number(n) <= 100) { // se 33 for maior que 1 menor que 100 da 'true'
        return true
    }else {
        return false
    }
}
function inslista(n, l) { // aqui (n) = 33 
    if(l.indexOf(Number(n)) != -1) { // aqui (l) vai procura posição do 33 / mas não tem então vai da -1
                                     // se dar -1 então não é deferente -1, vai da (false)

                                     // ** caso contrario se ele digitar 33 denovo, indexOf vai acahr posição dele é (1)
                                     //** depois vai pergunta se posição (1) diferente de -1 , vai da true
        return true
    }else {
        return false
    }
}


function adicionar() { // botão de adicionar
    if (insnumero(numero.value) && !inslista(numero.value, valores)) { // insnumero vai saber se valor é numero | inslista vai saber se numero está na lista ou não, ela usa o ! para dizer não pro sim : sim -> não
    // 33 deu false mas como o (inslista) tem ! vai virar = (true) vai adicionar na lista.

    // ** caso deu true ele vai mudar ! para false porque valor já existe então ele vai pro (else)
        valores.push(Number(numero.value)) // aqui está colocando valor de numero = 33 na valiavel valores [33,]
        let item = document.createElement('option') //criando teg 'option' para select.
        item.text = `valor ${numero.value} adicionar` // aqui o (item) ta pegando a frase para adicionar
        lista.appendChild(item)                // aqui ele ta adicionando a frase na lista (select)
        window.alert('tudo ok')
    }
    else {
        window.alert('Valor ivalido ou já encontrado na lista.') // o aviso se não colocar nenhum valor ou colocar repetido.
                                                                  //
    }
}