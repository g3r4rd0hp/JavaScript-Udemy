'use strict'

// Plantillas de Texto

var nombre = prompt("Introduce tu Nombre");
var apellido = prompt("Introduce tus Apellidos");

//var texto = " Mi nombre es: "+nombre+" <br/> Mis apellidos son: "+apellidos;

//Esta es una plantilla
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellido}</h3>
`;
document.write(texto);
