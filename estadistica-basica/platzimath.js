const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
    // esto me va a devolver un true o false, dependiendo de si la division tiene o no decimales, o resido
    //(numero % 2)
    
    // if(lista.length % 2) {
    //     return false;
    // } else {
    //     return true;
    // }

    return !(lista.length % 2)
}

PlatziMath.esImpar = function esImpar(lista) {
    return (lista.length % 2)
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
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

PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];

        if (listaCount[element]) {
            listaCount[element] += 1;
        } else {
            listaCount[element] = 1;
        }
    }

    console.log(listaCount)

    const listaArray = Object.entries(listaCount)
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1)

    const maxNumber = listaOrdenada[listaOrdenada.length - 1]
    const moda = maxNumber[0]

    console.log("La Moda es " + moda)
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const array = PlatziMath.ordenarLista(listaDesordenada)

    const listaEsPar = PlatziMath.esPar(array);


    if (listaEsPar) {

        const MitadListaPar1 = array[(array.length / 2) - 1];
        const MitadListaPar2 = array[(array.length / 2)] ;

        const listaMitades = [MitadListaPar1, MitadListaPar2];

        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
        return medianaListaPar;

        // const IndexMitadListaPar1 = (array.length / 2) - 1;
        // const IndexMitadListaPar2 = (array.length / 2) ;
        // const numero1 = array[IndexMitadListaPar1];
        // const numero2 = array[IndexMitadListaPar2];
        // console.log(IndexMitadListaPar1)
        // console.log(IndexMitadListaPar2)
        // console.log(numero1, numero2);
        // const medianaListaPar = (numero1 + numero2) / 2 
        // return medianaListaPar

    } else {
        const IndexMitadListaImpar = Math.floor(array.length / 2);
        const medianaListaImpar = array[IndexMitadListaImpar];
        console.log(medianaListaImpar);

        return medianaListaImpar;

        //metodo Math.floor, quita los decimales
        //Math.floor(10 / 2)
    }
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {

    // function ordenar(valorAcumulado, nuevoValor) {
    //      // formas de mover de posicion:
    //     // return -1; 
    //     // return 0;
    //     // return 1;
    //     // if (valorAcumulado > nuevoValor) {
    //     //     return 1;
    //     // } else if (valorAcumulado == nuevoValor) {
    //     //     return 0;
    //     // } else if(valorAcumulado < nuevoValor) {
    //     //     return -1;
    //     // }
    //     return valorAcumulado - nuevoValor; //menor a mayor
    //     //return nuevoValor - valorAcumulado, // mayor a menor

    //     //el numero se va a cambiar siempre que el resultado positivo
    //     // return 5 - 10 -> -5, el numero queda igual
    //     // return 5 - 5 -> 0, el numero queda igual 
    //     // return 10 - 5 -> 5, el numero cambia

    // } 
    // const lista = listaDesordenada.sort(ordenar);
    const lista = listaDesordenada.sort((a, b) => a - b);

    return lista;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {

    function listaSort(a, b) {
        return a[i] - b[i]
    }

    const lista = listaDesordenada.sort(listaSort);

    return lista;
}