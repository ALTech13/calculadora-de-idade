var calc = document.querySelector('#calc')

calc.addEventListener('click', function(e){
    e.preventDefault();
    
    var agora = new Date()
    var diaAtual = agora.getDate()
    var mesAtual = agora.getMonth() + 1
    var anoAtual = agora.getFullYear()

    var fdia = document.querySelector('#fdia')
    var fmes = document.querySelector('#fmes')
    var fano = document.querySelector('#fano')

    var dianasc = Number(fdia.value)
    var mesnasc = Number(fmes.value)
    var anonasc = Number(fano.value)

    var res = document.querySelector('#res')

    var idade = anoAtual - anonasc
    
    if(anonasc > anoAtual){
        alert('[ERRO]: Dados inválidos! Verifique seus dados e tente novamente!')
    }
    else if(fdia.value.length == 0 || fmes.value.length == 0 || fano.value.length == 0){
        alert('Preencha todos os campos')
    }
    
    else if((mesnasc > mesAtual) || (mesnasc == mesAtual && dianasc > diaAtual)){
        idade = idade - 1
        res.innerHTML = `Idade atual: ${idade} anos`
    }
    else if(dianasc == diaAtual && mesnasc == mesAtual){
        res.innerHTML = `Hoje é o seu aniversário, parabéns! Idade atual: ${idade}`
    }
    else{
        res.innerHTML = `Idade atual: ${idade} anos`
    }
    
}

)