'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torinio'];

//Primera Raiz multidimensional
var cine = [categorias, peliculas];

//Acceder nomarl
//console.log(cine);

//Acceder a categorias 
//Segunda Raiz multidimensional
console.log(cine[0][1]);
console.log(cine[1][2]);