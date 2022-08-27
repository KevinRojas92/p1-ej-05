"use strict";

let numero;

function ingresar (){
    do {
        numero = parseInt(prompt(`Ingrese un número`));
    } while (isNaN(numero));

    return numero;
}

function mostrar (){
    if (numero % 2 == 0){
        alert(`El número que ingresaste es par`);
    } else if (numero % 2 == 1){
        alert(`El número ingresado es impar`);
    }
}