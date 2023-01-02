'use strict'

//Arrays Avanzados - Recorrer un Array

var nombre = "G3r4rdohp";
//Se define entre corchete "[]" y puede contener string, booleano, etc.
var nombres = ["Victor P", "Jade L", "Aridai I", "Lucas H", 52, true];

//****************************************************************
var lenguajes = new Array("PHP", "JavaScript", "Ruby", "Python", "C#", "Cobol", "Pascal", "MatLab", "ABAP", "C++", "Go");

//Para ver la longitud de un Array
//console.log(nombre.length);

//Sacar el valor de del indice del elemento en el Array
/*
var elemento = parseInt(prompt("¿Que elemento del Array quieres?", 0));
if(elemento >= nombres.length){
    alert("Introduce un numero menor que " + nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");

}
document.write("</ul>");



//*************************
//alert(nombres[elemento]);

