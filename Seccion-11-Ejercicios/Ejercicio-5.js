'use strict'

/*
Crear un programa que muestre todos lo numeros divisores de un numero introducido en un PROMPT
*/

var numero = parseInt(prompt("Mete un numero"));

for(var i = 1; i <= numero; i++){

    if(numero%i == 0){
        console.log("Divisor: "+i)
    }
    
}