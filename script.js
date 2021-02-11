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

/*Nome do aluno - nota1 - nota2- média - aprovado ou reprovado*/

var nomes =["Igor", "Jose", "Mariana"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];


function media(n1, n2){
    return(n1 + n2) /2;
}
function passou(media){
    /*var resultado = "Reprovado";
    if (media > 7){
        resultado = "Aprovado";
    }
    return resultado;*/

    if (media > 7){
        return "Aprovado";
    }
    else{
        return "Reprovado";
    }
}

for(var index in nomes){
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2);
    
    console.log(nomes[index] + " - " + nota1 + " - " + nota2 + " - " +
    media(nota1, nota2) + " - " + passou(m));
}
 