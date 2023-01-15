console.log(calcularPromedio)
function calcularPromedio(lista) {
    // sumar todos los elementos de array, dividirlo en el length
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i]
    // }


    // function sumarTodosElementos(valorAcumulado, nuevoValor) {
    //     return valorAcumulado + nuevoValor
    // }
    // const sumaLista = lista.reduce(sumarTodosElementos);


    // arrow functions 
    // const ejemplo = (a, b) => a + b;

    const sumaLista = lista.reduce((a, b) => a+ b);

    return sumaLista / lista.length
}

// function esPar(array) {
//     if (array.length == 2 || array.length == 4 || array.length == 6 || array.length == 8 || array.length == 0) {
//         return true
//     } else {
//         return false
//     }
// }

function esPar(lista) {
    // esto me va a devolver un true o false, dependiendo de si la division tiene o no decimales, o resido
    //(numero % 2)
    
    // if(lista.length % 2) {
    //     return false;
    // } else {
    //     return true;
    // }

    return !(lista.length % 2)
}