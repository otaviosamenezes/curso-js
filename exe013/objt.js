let amigo = {nome: 'Marcos', sexo: 'Masculino',
     peso: '85.4',
    engorda(p=0){
        console.log('engordou')
        this.peso += p
    }}
    amigo.engorda(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)