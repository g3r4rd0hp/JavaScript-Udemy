'use strict'

//Transformacion de Textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "¡Es muy bueno!";

var dato = numero.toString();
//toUpperCase para convertir texto a Mayusculas
    dato = texto1.toUpperCase();
//toLowerCase para convertir texto a Minusculas
    dato = texto2.toLowerCase();

    console.log(dato);

//"typeof" para saber que tipo de dato es    
//console.log(typeof dato);

// Calcular longitud  de un Texto

var nombre ="G3r4rdohp";
    nombre = ["hola", "hola"];

    console.log(nombre.length);

// Concatenar (unir textos)

var textoTotal = texto1+ " " +texto2;
    //O bien pues, puede usarse el metodo "concat"
    var textoTotal = texto1.concat(" "+texto2);
    console.log(textoTotal);

