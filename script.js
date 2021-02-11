// Escreva uma função que receba dois números e retorne o maior deles

function maiorEntreDois(num1,num2){
    if(num1 > num2){
        return num1
    }
    else{
        return num2
    }
}
​
// Escreva uma função que receba um Array com 3 números e imprima eles em ordem

function ordenarLista(lista){
    var listaOrdenada = lista.sort((a,b)=>a-b)
    for (let num of listaOrdenada) {
        console.log(num)
    }
}
​
​ordenarLista([9,25,3,20,18])

// Escreva uma função que receba um Array com 5 números e retorne o maior deles

function maiorNum(lista){
    var maior = lista[0]
    for (let num of lista) {
       maior = maiorEntreDois(num,maior)
    }
    return maior
}

​console.log(maiorNum([9,25,3,20,18]))

// Escreva uma função que receba um número e imprima se ele é par ou ímpar

function parOuImpar(num){
    if(num%2 == 0){
        console.log("par")
    }else{
        console.log("impar")
    }
}
 const maior = maiorNum([9,25,3,20,32,18])
 parOuImpar(maior)

 