'use strict'

var categorias = ['Acción', ' Terro', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

/*var elemento = prompt("");

do{
    elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

//peliculas.pop();
*/

//Para eliminar un elemento del "ARRAY":
var indice = peliculas.indexOf('Gran Torino');
console.log(indice);
if(indice > -1){
    peliculas.splice(indice, 1);
}

//Para convertir un array a texto:
var peliculas_string = peliculas.join();
    console.log(peliculas_string);

// "push" sirve para añadir un nuevo elemento al "Array"
    //peliculas.push("Batman");

//console.log(peliculas);