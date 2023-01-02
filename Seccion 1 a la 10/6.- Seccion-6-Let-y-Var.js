'use strict' //Modo estricto

//Pruebas con Let y Var

//Prueba con Var
var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Prueba con Let
var texto = "Curso de JS Udemy";
console.log(texto); //valor "

if(true){
    let texto = "Curso de CSS Udemy";
    console.log(texto); //Valor CSS
}

console.log(texto); //valor js