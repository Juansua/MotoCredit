const kawa = {
    ninja : 3000,
    versys : 4000,
}

const suki = {
    gixxer : 1500,
    vstrom : 5000,
}

const motos = [kawa, suki];

let referencia = " ";
let tiempo = " ";
let continuar = "SI";

function calculo() {
    switch (referencia) {
        case "NINJA":
        resultado = kawa.ninja / tiempo;
        break;

        case "VERSYS":
        resultado = kawa.versys / tiempo;
        break;

        case "GIXXER":
        resultado = suki.gixxer / tiempo;
        break;

        case "VSTROM":
        resultado = suki.vstrom / tiempo;
        break;
    }
}


alert(`Bienvenido a tu simulador de crédito! Actualmente hay ${motos.length} marcas disponibles para venta.`);

    while (continuar == "SI") {
        referencia = prompt("Ingrese el nombre de la moto NINJA ($3.000) - VERSYS ($4.000) - GIXXER ($2.000) - VSTROM ($5.000)");
        tiempo = parseInt(prompt("Ingrese EN MESES el tiempo en el que quiere pagar la moto:"));
        calculo();
        alert("Tus pagos mensuales para esta moto serían de " + resultado)
        continuar = prompt("Continuar? (SI - NO)");
    }

    if (continuar != "SI") {
        document.write("<h1>¡Muchas gracias por usar mi aplicación!</h1>")
    }