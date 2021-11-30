/**
*   @file Ajax
*   @description Archivo para pruebas de ajax
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

// Por la vía fácil
function cargarFichero(){

    fetch('datos1.txt')
        .then(respuesta => respuesta.text())
        .then(texto => document.getElementById('span1').innerHTML = texto);

}

// Pasar parámetro por GET
function cargarFichero2(){

    fetch('datos.php?nombre=Ruben&saldo=99999999')
        .then(respuesta => respuesta.text())
        .then(texto => document.getElementById('span2').innerHTML = texto);

}

// Con mayor control
function cargarFichero3(){

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById('span3').innerHTML = this.responseText;
    }
    xhttp.open('GET', 'datos1.txt', true);
    xhttp.send();

}

// Detallando el control
function cargarFichero4(){

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.readyState, this.status);
        if(this.readyState == 4 && this.status == 200)
            document.getElementById('span4').innerHTML = this.responseText;
    }
    xhttp.open('GET', 'datos1.txt', true);
    xhttp.send();

}