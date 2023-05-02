let inputBase = document.querySelector(".inputBase")
let inputExpoente = document.querySelector(".inputExpoente")
let iconLimoar = document.querySelector(".input_valor i")


// variaveis de botão

let bottonPotencicao = document.querySelector(".botão_potencicao")

let bottonSoma = document.querySelector(".botao_soma")

let bottoSuntracao = document.querySelector(".botao_subtracao")

let botaoMultiplicacao = document.querySelector(".botao_multiplicacao")

let botaoDivisao = document.querySelector(".bottao_divisao")

// funcões de calculo

function potencição(){
    const baseValor =  Number(inputBase.value)

    const ValorExpoente =  Number(inputExpoente.value)

    let resultado =  document.createElement("p")
    
    inputExpoente.after(resultado)

    resultado.innerText = `o resultado da potenciação e ${Math.pow(baseValor , ValorExpoente)}`

    bottonPotencicao.addEventListener("click" , function zerar(){
        resultado.innerText = ""
    }) 
    
    iconLimoar.addEventListener("click" , function(){
        resultado.innerText = ""
     })
}

function soma(){
    const baseValor =  Number(inputBase.value)

    const ValorExpoente =  Number(inputExpoente.value)

    let resultado =  document.createElement("p")

    inputExpoente.after(resultado)

    resultado.innerText = `o resultado da soma e ${baseValor + ValorExpoente}`

    bottonSoma.addEventListener("click" , function zerar(){
        resultado.innerText = ""
    })

    iconLimoar.addEventListener("click" , function(){
        resultado.innerText = ""
     })
   
}
function sobtracao(){
    const baseValor =  Number(inputBase.value)

    const ValorExpoente =  Number(inputExpoente.value)

    let resultado =  document.createElement("p")

    inputExpoente.after(resultado)

    resultado.innerText =`o resultado da subtração e ${baseValor - ValorExpoente}`

    bottoSuntracao.addEventListener("click" , function zerar(){
        resultado.innerText = ""
    }) 

    iconLimoar.addEventListener("click" , function(){
        resultado.innerText = ""
     })
}


function multiplicacao(){
    const baseValor =  Number(inputBase.value)

    const ValorExpoente =  Number(inputExpoente.value)

    let resultado =  document.createElement("p")

    inputExpoente.after(resultado)

    resultado.innerText = `o resultado da multiplicação e ${baseValor * ValorExpoente}`

    botaoMultiplicacao.addEventListener("click" , function zerar(){
        resultado.innerText = ""
    }) 

    iconLimoar.addEventListener("click" , function(){
        resultado.innerText = ""
     })
}

function divisao(){
    
    const baseValor =  Number(inputBase.value)

    const ValorExpoente =  Number(inputExpoente.value)

    let resultado =  document.createElement("p")

    inputExpoente.after(resultado)

    resultado.innerText = `o resultado da divisão e ${baseValor / ValorExpoente}`

    botaoDivisao.addEventListener("click" , function zerar(){
        resultado.innerText = ""
    }) 

    iconLimoar.addEventListener("click" , function(){
        resultado.innerText = ""
     })
    
}

