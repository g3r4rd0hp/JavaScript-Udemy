'use strict'

/*
Crear un programa que:

1.- Pida 6 numeros por pantalla y los meta en un "Array".
2.- Mostrar el "Array" entero (todos sus elementos) en el cuerpo de la pagina y la consola.
3.- Sacar el "Array" ordenado.
4.- Invertir su orden y mostrarlo.
5.- Mostrar cuantos elementos tiene el "Array".
6.- Y realizar una busqueda de un valor introducido por el usuario y nos diga si lo ha encontraro y cual su indice.
(Se valorará el uso de funciones).
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del Array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}

// 1.- Pedir 6 numeros
var numeros = [];

for(var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

// 2.- Mostrar "Array" en el cuerpo de la pagina
mostrarArray(numeros);

// 2.1.- Mostrar "Array" por la consola
console.log(numeros);

// 3.- Ordenar y mostrar
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, 'ordenado');

// 4.- Invertir su orden y mostrarlo
numeros.reverse();
mostrarArray(numeros, 'revertido');

// 5.- Cuantos elementos tiene el "Array"
document.write("<h1>El Array tiene: "+numeros.length+" elementos");

// 6.- Busqueda

var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex( numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1><hr/>");
}else{
    document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
}
