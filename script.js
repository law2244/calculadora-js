let qd = (x) =>{
    return document.querySelector(x)
}

// variaveis das operações
let somaButtom = qd(".soma")

let subtracaoButton = qd(".subtração")

let multplicacaoButton = qd(".multiplicaçao")

let divisaoButton = qd(".divisao")

let potenciacaoButton = qd(".potenciacao")

let radiacaoButton = qd(".radiacao") 

// class inputs

let input1Operaacao =   qd(".input1")
let input2Operaacao =   qd(".input2")

// variaveis das classs da classes

let divInputs = qd(".inputOperacao")

let buttonResult = qd(".resultado")

// variaveis dos resultados das operações

let resultadoOperacao = document.createElement("p")
input2Operaacao.after(resultadoOperacao)



// funcões e eventos
somaButtom.addEventListener("click" , () => {

    resultadoOperacao.innerHTML = ""
    input1Operaacao.setAttribute("placeholder" ,"digite um valor para soma" )
    input2Operaacao.setAttribute("placeholder" ,"digite um valor para soma" )
    divInputs.setAttribute("class" , "inputOperacaoJs")
    input2Operaacao.style.display = "block"

    buttonResult.addEventListener("click" , () => {
        let soma =   Number( input1Operaacao.value) + Number( input2Operaacao.value) 
        resultadoOperacao.innerHTML = soma
        // input1Operaacao.value = ""
        // input2Operaacao.value = ""
    })
})


subtracaoButton.addEventListener("click" , () => {
    
    resultadoOperacao.innerHTML = ""
    divInputs.setAttribute("class" , "inputOperacaoJs")
    input1Operaacao.setAttribute("placeholder" ,"digite um minuendo" )
    input2Operaacao.setAttribute("placeholder" ,"digite um subtraendo" )
    input2Operaacao.style.display = "block"

    buttonResult.addEventListener("click" , () => {
        let subtracao =   Number( input1Operaacao.value) - Number( input2Operaacao.value) 
        resultadoOperacao.innerHTML = subtracao
        // input1Operaacao.value = ""
        // input2Operaacao.value = ""
    })


})

multplicacaoButton.addEventListener("click" , () => {

    resultadoOperacao.innerHTML = ""
    divInputs.setAttribute("class" , "inputOperacaoJs")
    input1Operaacao.setAttribute("placeholder" ,"digite um fator" )
    input2Operaacao.setAttribute("placeholder" ,"digite um fator" )
    input2Operaacao.style.display = "block"

    buttonResult.addEventListener("click" , () => {
        let multiplicacao =   Number( input1Operaacao.value) * Number( input2Operaacao.value) 
        resultadoOperacao.innerHTML = multiplicacao
        // input1Operaacao.value = ""
        // input2Operaacao.value = ""
    })
})


divisaoButton.addEventListener("click" , () => {

    resultadoOperacao.innerHTML = ""
    divInputs.setAttribute("class" , "inputOperacaoJs")
    input1Operaacao.setAttribute("placeholder" ,"digite um dividendo" )
    input2Operaacao.setAttribute("placeholder" ,"digite um divisor" )
    input2Operaacao.style.display = "block"

    buttonResult.addEventListener("click" , () => {
        let divisao =   Number( input1Operaacao.value) / Number( input2Operaacao.value) 
        resultadoOperacao.innerHTML = divisao
        if (Number.isNaN(divisao)){
            resultadoOperacao.innerHTML = "não foi possivel realizar essa operacão"
        }
        // input1Operaacao.value = ""
        // input2Operaacao.value = ""
    })
    
})

potenciacaoButton.addEventListener("click" , () => {
 
    resultadoOperacao.innerHTML = ""
    divInputs.setAttribute("class" , "inputOperacaoJs")
    input1Operaacao.setAttribute("placeholder" ,"digite uma base" )
    input2Operaacao.setAttribute("placeholder" ,"digite um expoente" )
    input2Operaacao.style.display = "block"

    buttonResult.addEventListener("click" , () => {
        let poteciacao =  Math.pow( Number( input1Operaacao.value) , Number( input2Operaacao.value) )
        resultadoOperacao.innerHTML = poteciacao
        // input1Operaacao.value = ""
        // input2Operaacao.value = ""
    })
})

radiacaoButton.addEventListener("click" , () => {

    resultadoOperacao.innerHTML = ""
    divInputs.setAttribute("class" , "inputOperacaoJs")
    input1Operaacao.setAttribute("placeholder" ,"digite uma radicando" )
    input2Operaacao.style.display = "none"
    
    buttonResult.addEventListener("click" , () => {
        let radiacao =  Math.sqrt(Number( input1Operaacao.value))
        resultadoOperacao.innerHTML = radiacao
        // input1Operaacao.value = ""
        // input2Operaacao.value = ""
   })
})
