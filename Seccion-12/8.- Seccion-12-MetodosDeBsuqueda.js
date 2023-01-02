'use strict'

//Transformacion de Textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript, curso de G3r4rdohp";
var texto2 = "¡Es muy bueno!";

//Busca la primera coincidencia de dicha palabra
var busqueda = texto1.indexOf("curso");
    console.log(busqueda);

//Busca la ultima coincidencia de dicha palabra
var busqueda = texto1.lastIndexOf("curso");
    console.log(busqueda);

//Metodo "search" funciona igual que "indexOf"
var busqueda = texto1.search("curso");
    console.log(busqueda);

    //Metodo "match" devuelve una coleecion de los resultados que encuentre
var busqueda = texto1.match(/curso/gi);
console.log(busqueda);

//Metodo "subtr-substring"  funcion de la siguiente manera
var busqueda = texto1.substring(14,5);
console.log(busqueda);

//Metodo "charAT"  sirve para sacar una letra de un string
var busqueda = texto1.charAt(44);
console.log(busqueda);

//Metodo "startsWith"  sirve para buscar un string desde el inicio y confirma si lo ha encontrado con un "true" o "false"
var busqueda = texto1.startsWith("Bienvenido");
console.log(busqueda);

//Metodo "includes"  sirve para buscar una palabra de un string y confirma si lo ha encontrado con un "true" o "false"
var busqueda = texto1.includes("JavaScript");
console.log(busqueda);
