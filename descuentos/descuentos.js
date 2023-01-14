const precio = document.querySelector(".precio")
const descuento = document.querySelector(".descuento")
const btn = document.querySelector(".total")
const mostrarResultado = document.querySelector(".mostrarResultado")

btn.addEventListener("click", calcularTotal)

// const arrayUObjeto = undefined; // [] ? {} ?

// const cuponsObj = {
//     'JuanDC_es_batman': 25,
//     '234567': 20,
//     '1233': 15,
// }

const cuponList = [];
cuponList.push({
    name: "JuanDC_es_batman",
    valorDescuento: 30,
})


function calcularTotal() {
    // (p * (100-D)) / 100
    costo = Number(precio.value)
    cupon = descuento.value

    if(!costo || !cupon) {
        mostrarResultado.innerHTML = "Porfavor Llena los Valores"
        return;
    }

    let valorDescuento;

    function isCoupnInArray(cuponElement) {
        return cuponElement.name == cupon;
    }

    // filter, recorre cada pedazo de un array, y puede ejecutar una funcion por cada elemento, depende de que le pase como argument o.
    const cuponInArray = cuponList.filter(isCoupnInArray)


    if (cuponInArray.length ) {
        valorDescuento = cuponInArray.valorDescuento;
    } else {
        mostrarResultado.innerHTML = "El cupon no es Valido"
        return;
    }

    console.log({ 
        cupon,
        cuponInArray,
        valorDescuento,
    })

    // if (cuponsObj[cupon]) {
    //     valorDescuento = cuponsObj[cupon];
    // } else {
    //     mostrarResultado.innerHTML = "El cupon no es Valido"
    //     return;
    // }

    // switch (cupon) {
    //     case "JuanDC_es_Batman":
    //         valorDescuento = 30
    //         break;
    //     case "No_le_Digas_a_Nadie":
    //         valorDescuento = 25
    //         break;
    //     default:
    //         mostrarResultado.innerHTML = "El cupon no es Valido"
    //         return;
    // }
    
    // if(cupon == "JuanDC_es_Batman") {
    //     valorDescuento = 30
    // } else if (cupon == "No_le_Digas_a_Nadie") {
    //     valorDescuento = 25
    // } else {
    //     mostrarResultado.innerHTML = "El cupon no es Valido"
    //     return;
    // }
    
    const result = (costo * (100 - valorDescuento)) / 100
    mostrarResultado.innerHTML = "El precio es $" + result
    
}