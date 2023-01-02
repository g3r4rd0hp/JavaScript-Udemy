'use strict'

function holaMundo(texto){
    var hola_mundo = "Texto dentro de funcion";

    console.log(texto);
    //Metodo aplicado a un objeto para convertirlo en otra cosa
    //En este caso un numero a un string
    console.log(numero.toString());
    //Se puede llamar la variable dentro de la funcion porque es "local"
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);

//No se puede llamar una variable fuera de la funcion
console.log(hola_mundo);
