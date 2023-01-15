console.log(salarios)


//analisis personal para Juanita
// como encontrar a Juanita en la lista? (en la vida real usariamos el numero de id, en este caso, el nombre)

// const personaQueBusco = "Juanita"
// const persona = salarios.find((persona) => {
//     return persona.name == personaQueBusco
// })

function encontrarPersona(personaQueBusco) {
    return salarios.find(persona => persona.name == personaQueBusco)
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    const sueldos = trabajos.map(function (elemento){
        return elemento.salario;
    })
    
    const medianaSalarios = PlatziMath.calcularMediana(sueldos);
    

    console.log(medianaSalarios)
}