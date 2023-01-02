'use strict'

//Funciones: Conjunto de ordenes que se van a ejecutar cuando invoquemos la funcion
//"Agrupacion reutilizable de un conjunto de instrucciones"

//Defino la funcion
function calculadora(numero1, numero2){

    //Conjunto de instrucciones a ejecutar
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicación: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));
    console.log("****************************");

    //return "Hola soy la calculadora";
}

//Invocar a llamar a la funcion

for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 8);
}





