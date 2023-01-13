const precio = document.querySelector(".precio")
const descuento = document.querySelector(".descuento")
const btn = document.querySelector(".total")
const mostrarResultado = document.querySelector(".mostrarResultado")

btn.addEventListener("click", calcularTotal)

function calcularTotal (costo, valorDescuento) {
    // (p * (100-D)) / 100
    costo = Number(precio.value)
    valorDescuento = Number(descuento.value)

    if (!costo || !valorDescuento) {
        mostrarResultado.innerHTML = "Llena los valores, please"
    } else {
        const result = (costo * (100 - valorDescuento)) / 100
        mostrarResultado.innerHTML = "El precio es $" + result
    }

    if(valorDescuento > 100 ) {
        mostrarResultado.innerHTML = "Aja, ya quisieras, no te vamos a dar plata -.-"
    }
}