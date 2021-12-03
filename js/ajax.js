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

    fetch('datos1.txt') // Hacemos la petición
        .then(respuesta => respuesta.text()) // Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
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

//Enviando datis al servidor por POST
function peticionPOST(){

    let formData = new FormData();
    formData.append('param1', 42);
    formData.append('param2', 'Rubén');
    let opciones = {
        method: 'POST',
        body: formData
    };
    fetch('datos_post.php', opciones)// Hacemos la petición
        .then(respuesta => respuesta.text()) // Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
        .then(texto => document.getElementById('span5').innerHTML = texto);

}

function peticionPOSTJSON(){

    let datos = {
        'param1': 42,
        'param2': 'Rubén'
    };
    let opciones = {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {'Content-Type': 'application/json'}
    };

    fetch('datos_post_json.php', opciones) //Hacemos la petición
        .then(respuesta => respuesta.text()) //Recibimos un objeto de tipo Response. respuesta.text devuelve una Promise
        .then(texto => document.getElementById('span6').innerHTML = texto);

}

function peticionPOSTJSON2(){

    let datos = {
        'param1': 42,
        'param2': 'Rubén'
    };
    let opciones = {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {'Content-Type': 'application/json'}
    };

    fetch('datos_post_json2.php', opciones) //Hacemos la petición
        .then(respuesta => respuesta.json()) //Recibimos un objeto de tipo Response. respuesta.json devuelve una Promise
        .then(objeto => document.getElementById('span7').innerHTML = objeto.loquesea);

}