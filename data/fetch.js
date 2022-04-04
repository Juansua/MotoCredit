/*

// const mostrarNinja = ({nombre, marca, cilindraje, precio, modelo})

const datosNinja = document.querySelector("#datosNinja");

datosNinja.addEventListener('click', obtenerDatosJason);

function obtenerDatosJason() {

    fetch("datos.json")

        .then((respuesta) => {
            console.log(respuesta);
            // return respuesta.json();
        })
        .catch((err) => {
            console.log(err.statusText);
        });
}

*/

let element = document.getElementById("datos")

fetch(`/datos.json`)
.then(response => response.json() )

.then(data => {
    element.innerHTML =
    `<p><strong>Referencia:</strong> ${data.nombre}</p>
    <p><strong>Marca:</strong> ${data.marca}</p>
    <p><strong>Cilindraje:</strong> ${data.cilindraje}</p>
    <p><strong>Precio:</strong> ${data.precio} NO NEGOCIABLE</p>
    <p><strong>Modelo:</strong> ${data.modelo}</p>`
})

/*
let element = document.getElementById("datosNinja")
element.innerHTML = <p>%{data.name}</p>
*/