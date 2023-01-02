'use strict'

//Recorrer Arrays "for" && "forEach"

var nombre = "G3r4rdohp";
var nombres = ["Victor P", "Jade L", "Aridai I", "Lucas H", 52, true];

var lenguajes = new Array("PHP", "JavaScript", "Ruby", "Python", "C#", "Cobol", "Pascal", "MatLab", "ABAP", "C++", "Go");

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

/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
*/

//"Array" normal: 
//Es mucho mas limpio que el: ^^^for(var)...^^^
/*
lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+lenguajes+"</li>")
});
*/

//for in para recorrer arreglos en un Array
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>")
}

document.write("</ul>");

/*
//Busquedas en un "Array"

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});

console.log(busqueda);
*/

//Busquedas en un "Array" con flecha "=>""

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
    console.log(busqueda);

//Busqueda en un "Array" con "flecha" e "findIndex"
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
    console.log(busqueda);

//Busqueda en un "Array" con "some" 
var precios = [10, 20, 50, 80, 12];

var busqueda = precios.some(precio => precio > 80);
    console.log(busqueda);

//Si necesitamos tener el "Array" limpio dentro del "Bucle" aplicamos:

/*
lenguajes.forEach((elemento, indice, arr)=>{
    console.log(arr);
    document.write("<li>"+indice+" - "+elemento+"</li>")
});

document.write("</ul>");
*/
