console.log(salarios)


//analisis personal para Juanita
// como encontrar a Juanita en la lista? (en la vida real usariamos el numero de id, en este caso, el nombre)

// const personaQueBusco = "Juanita"
// const persona = salarios.find((persona) => {
//     return persona.name == personaQueBusco
// })


// Analisis Individual
function encontrarPersona(personaQueBusco) {
    return salarios.find(persona => persona.name == personaQueBusco)
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    const sueldos = trabajos.map(function (elemento){
        return elemento.salario;
    })
    
    const medianaSalarios = PlatziMath.calcularMediana(sueldos);
    return medianaSalarios
    
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i -1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    console.log(porcentajesCrecimiento, medianaPorcentajesCrecimiento)

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    console.log(ultimoSalario, nuevoSalario)
}

// Analisis Empresarial
/* {
    Industrias Mokepon: {
        //
    }
    otra empresa: {}
    otra empresa: {}
    otra empresa: {}
    otra empresa: {}
}
*/

const empresas = {};

for (persona of salarios) {
    for(trabajo of persona.trabajos) {
        if(!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }

        if(!empresas[trabajo.empresa][trabajo.year])
        empresas[trabajo.empresa][trabajo.year] = [];

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}


function medianaEmpresaYear(nombre, year) {
    if(!empresas[nombre]) {
        console.warn("la empresa no existe")
    } else if (!empresas[nombre][year]) {
        console.warn("la empresa no dio salarios ese año")
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year])
    }
}

function proyeccionPorEmpresa(nombre) {
    if(!empresas[nombre]) {
        console.warn("la empresa no existe")
    } else {
        const empresasYears = Object.keys(empresas[nombre]);
        const listaMedianaYear = empresasYears.map((year) => {
            return medianaEmpresaYear(nombre, year);
        });
        

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYear.length; i++) {
            const salarioActual = listaMedianaYear[i];
            const salarioPasado = listaMedianaYear[i -1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }
    
        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);


        const ultimaMediana = listaMedianaYear[listaMedianaYear.length - 1];
        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
        const nuevaMediana = ultimaMediana + aumento;

        console.log(ultimaMediana, nuevaMediana)
    
    }
}

// analisis general

function medianaGeneral() {
    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)  
    );

    return PlatziMath.calcularMediana(listaMedianas);
        
}


function medianaTop10() {
    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)  
    );
    const medianaOrdenadas = PlatziMath.ordenarLista(listaMedianas)

    // 20 / 10 -> 2

    const cantidadElementos = listaMedianas.length / 10 
    const limite = listaMedianas.length - cantidadElementos
    
    const top10 = medianaOrdenadas.slice(limite, medianaOrdenadas.length)

    // slice, saca los elementos
    // splice, quita los elementos

    const medianaTop10 = PlatziMath.calcularMediana(top10);
    return medianaTop10;
}