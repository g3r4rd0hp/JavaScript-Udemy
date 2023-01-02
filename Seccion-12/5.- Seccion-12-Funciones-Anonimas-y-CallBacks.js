'use strict'

//Funciones anonimas
//Es una función que no tiene nombre


var pelicula = function(nombre){
    return "La pelicula es: " +nombre;
}


//******************************************

//CallBack's
//Una funcion que se ejecuta dentro de otra

/*
function sumame(numero1, numero2){
    var sumar = numero1 + numero2;

    return sumar;
}

console.log(sumame(4, 5));
*/
//******************************************


//CallBack's Example

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function(dato){
    console.log("La suma es:", dato);
},
function(dato){
    console.log("La suma por dos es:", (dato*2));
});


//******************************************

//Funciones de Flecha

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}
//En caso de llevar un parametro se cambia el: "function" por una flecha: "=>"
//Si son dos parametros, debe llevar parenteris o normal
sumame(5, 7, dato => {
    console.log("La suma es:", dato);
},
//En caso de llevar un parametro se cambia el: "function" por una flecha: "=>"
//Si son dos parametros, debe llevar parenteris o normal
dato => {
    console.log("La suma por dos es:", (dato*2));
});

//******************************************