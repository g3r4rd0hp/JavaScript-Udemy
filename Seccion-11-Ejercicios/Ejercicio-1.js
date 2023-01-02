'use strict'

// "Ejercicio 1"
// Crear un programa que pida dos numeros y que éste nos diga cua es el Mayor, el Menor ó si son Iguales
// PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir

        var numero1 = parseInt(prompt('Introduce el primer dato', 0));
        var numero2 = parseInt(prompt('Introduce el segundo dato', 0));

console.log(numero1, numero2);

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el primer dato', 0));
    numero2 = parseInt(prompt('Introduce el segundo dato', 0));

}

    if(numero1 == numero2){
        //Es IGUAL que
        alert("los numeros son iguales");

    }else if(numero1 > numero2){
            //Es MAYOR que
        alert("El numero Mayor es: " + numero1);
        alert("El numero Menor es: " + numero2);

    }else if(numero2 < numero1){
            //Es MENOR que
        alert("El numero Mayor es: " + numero2);
        alert("El numero Menor es: " + numero1);

    }else{
        alert("INTRODUCE NUMEROS CORRECTOS");
    }



