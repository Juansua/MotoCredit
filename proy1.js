let ninja = document.getElementById("ninja");
let versys = document.getElementById("versys");
let res = document.querySelector("#res h2");
let a = 0;


ninja.addEventListener("click", function ninja() {
    document.getElementById("meses").style.display = "block";
    precio = 2000;
});
versys.addEventListener("click", function versys() {
    document.getElementById("meses").style.display = "block";
    precio = 4000;
});

let doce = document.getElementById("doce");
let veint = document.getElementById("veint");

doce.addEventListener("click", function doce() {
    resultado = (precio / 12) * 1.2;
    res.innerHTML = `Las cuotas mensuales serían de $${parseInt(resultado)} pesos`;
    document.getElementById("stor").style.display = "block";
});

veint.addEventListener("click", function veint() {
    resultado = (precio / 24) * 1.5;
    res.innerHTML = `Las cuotas mensuales serían de $${parseInt(resultado)} pesos`;
    document.getElementById("stor").style.display = "block";
});

let guardar = document.getElementById("guardar");
let borrar = document.getElementById("clear");
let dato = document.getElementById("dato");
let resp = document.getElementById("resp");
let prev = 0;

guardar.addEventListener("click", function guardar() {
    localStorage.setItem("guardado", JSON.stringify (resultado));
    prev = JSON.parse(localStorage.getItem("guardado"));
    Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Los datos fueron guardados',
        showConfirmButton: false,
        timer: 1500
        })
})

borrar.addEventListener("click", function borrar() {
    localStorage.clear();
    document.getElementById("resp").style.display = "none";
    Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Los datos fueron borrados',
        showConfirmButton: false,
        timer: 1500
        })
})

dato.addEventListener("click", function dato() {
    resp.innerHTML = 'Tu cotización anterior fue de $' + parseInt(prev) + "pesos";
    document.getElementById("resp").style.display = "block";
})

/*
let aka = "body";

document.getElementsByTagName(aka).style.backgroundColor = "#fff";




window.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        alert("¡Funciona!");
    }
})

*/


