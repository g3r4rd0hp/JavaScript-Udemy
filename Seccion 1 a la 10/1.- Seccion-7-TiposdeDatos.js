'use strict'

// Operaores
var numero1 = 16;
var numero2 = 10;
var operacion = numero1 + numero2;

alert("El resultado de la operacion es: " + operacion);

//1.- Tipos de datos

var numero_entero = 10; //numero entero
var cadena_texto = "Hola"; //strings
var verdadero_o_falso = "true"; //vooleano

console.log(verdadero_o_falso);
//2.- 

Number();

//3.- 
var numero_falso = "16";
console.log(numero_falso+10);
console.log(Number(numero_falso)+10);

//4.-
var numero_falso = "16.5"; //Numero echo string por estar entre comillas
console.log(Number(numero_falso)+10); //convierte el numero strig en un float, numero, o cualquier otra cosa
console.log(parseInt(numero_falso)+10); //convierte el numero strig en un numero entero
console.log(parseFloat(numero_falso)+10); // convierte en numero decimal

//5.-

console.log(numero_entero+10); //sumara la variable mas el dato colocado
console.log(String(numero_entero)+10);//convierte cuaquier variable a string
