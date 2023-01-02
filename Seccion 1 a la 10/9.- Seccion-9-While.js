'use strict'

//Bucle While++
var  year = 2018;

while(year <= 2051){
    //Ejecuta esto
    console.log("Estamos en el año:"+year);

    //Break
    if(year == 2000){
        break;
    }

    year++;
}

//Bucle While--
/*var  year = 2018;

while(year != 1991){
    //Ejecuta esto
    console.log("Estamos en el año:"+year);

    year--;

}
*/

// Do While 1
//Nos permite ejecutar un bloque de instrucciones y luego evaluar la condicion 
var years =20;

do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years = 20;
}while(years != 20)

// Do While 2
/*var years = 30;

do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years++;
}while(years > 25)
*/

