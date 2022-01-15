let botao = document.querySelector('button#botao')
function imc(){
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let resultado = document.querySelector('div#resultado')
    let metros = Number(altura.value)
    let massa = Number(peso.value)
    let valorImc = massa / (metros * metros) 
    
    if(nome !== '' && altura !== '' && peso !== ''){
       
        if(valorImc < 18.5){
            resultado.innerHTML = `${nome}, seu imc é de ${valorImc.toFixed(2)}. Classificação: magreza`
        }
        else if(valorImc >= 18.5 && valorImc <= 24.9){
            resultado.innerHTML = `${nome}, seu imc é de ${valorImc.toFixed(2)}. Classificação: normal`
        }
        else if(valorImc >= 25 && valorImc <= 29.9){
            resultado.innerHTML = `${nome}, seu imc é de ${valorImc.toFixed(2)}. Classificação: sobrepeso`
        }
        else if(valorImc >= 30 && valorImc <= 39.9){
            resultado.innerHTML = `${nome}, seu imc é de ${valorImc.toFixed(2)}. Classificação: obesidade`
        }
        else{
            resultado.innerHTML = `${nome}, seu imc é de ${valorImc.toFixed(2)}. Classificação: obesidade grave`
        }

    }
    else{
        alert('Preencha os dados!!!')
    }
}