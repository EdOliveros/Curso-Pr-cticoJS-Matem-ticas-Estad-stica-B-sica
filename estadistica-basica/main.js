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

function esImpar(lista) {
    return (lista.length % 2)
}

function calcularMediana(array) {
    const listaEsPar = esPar(array);


    if (listaEsPar) {

        const IndexMitadListaPar1 = (array.length / 2) - 1;
        const IndexMitadListaPar2 = (array.length / 2) ;

        const numero1 = array[IndexMitadListaPar1];
        const numero2 = array[IndexMitadListaPar2];

        console.log(IndexMitadListaPar1)
        console.log(IndexMitadListaPar2)

        console.log(numero1, numero2);
        

    } else {
        const IndexMitadListaImpar = Math.floor(array.length / 2);
        const medianaListaImpar = array[IndexMitadListaImpar];
        console.log(IndexMitadListaImpar);
        console.log(medianaListaImpar);

        return medianaListaImpar;

        //metodo Math.floor, quita los decimales
        //Math.floor(10 / 2)
    }
}