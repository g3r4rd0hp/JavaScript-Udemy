'use strict'

// Condicional IF.
// Si A es igual a B entonces haz algo.

/*
//Mayor que.
    var edad1 = 30;
    var edad2 = 12;
//Menor que.
    //var edad1 = 12;
    //var edad2 = 30;

// Si pasa esto.
if(edad1 > edad2){
    //Ejecuta esto.
    console.log("Edad uno es mayor que edad dos");
}else{
    console.log("La edad uno es inferior");
}
*/

/*
//Operadores relacionales
var edad = 33;
var nombre = 'G3r4rdohp';

//    Mayor: >
//    Menor: <
//    Mayor o igual: >=
//    Menor o igual: <=
//    igual: ==
//    Distinto: !=


if(edad >= 18){
    //Es mayor de edad
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");

    if(edad == 33){
        console.log('Todavia eres millenial');
    }else{
        console.log('Ya no eres millenial');
    }

}else{
    //Es menor de edad
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}
*/

//else if

var edad = 74;
var nombre = 'Daniel León';

if(edad >= 18){
    //Es mayor de edad
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");

    if(edad <= 33){
        console.log('Todavia eres millenial');
    }else if(edad >= 70){
        console.log('Eres un anciano');
    }else{
        console.log('Ya no eres millenial');
    }

}else{
    //Es menor de edad
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}
