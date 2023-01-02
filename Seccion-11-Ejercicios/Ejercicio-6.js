'use strict'

/*
Crear un programa que nos diga si un numero es par o impar
Nos muestre una ventana PROMPT
Si no es valida la inforacion introducida, nos pida reintentar
*/

var number = parseInt(prompt('Introduce un numero', 0));

while(isNaN(number)){
    number = parseInt(prompt('Introduce un numero', 0));
}

if(number % 2 == 0){
    alert("Es un numero par");
}else{
    alert("Es impar");
}
