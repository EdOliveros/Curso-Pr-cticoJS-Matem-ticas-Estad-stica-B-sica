console.group("cuadrado")

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado
});

function calcularCuadrado (lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  }
}

console.groupEnd("cuadrado")
console.group("triangulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 +ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo (lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  }
}

function calcularAlturaTriangulo(lado1, base) {
  if(lado1 == base) {
    console.warn("esto no es un triangulo isoceles");
  } else {
    // h = raizcuadrada (lado1**2 - (b**2)/4)
    return Math.sqrt( (lado1 ** 2) - ( (base ** 2)/4 ) );
  }
}

function alturaTrianguloEscaleno (lado1, lado2, lado3) {
  if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    const S = (lado1 + lado2 + lado3) / 2
    const x = 2 / lado1
    const result = x * (Math.sqrt(S * (S - lado1) * (S - lado2) * (S - lado3)))

    return Math.trunc(result)

  } else {
    return false
  }
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd("triangulo")


console.group("circle")

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
})

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2);

   return {
    circunferencia: diametro * Math.PI.toFixed(3),
    area: radioAlCuadrado * Math.PI.toFixed(3),
   }
}


// esto me retorna el valor de pi, con un limite de 10 decimales
console.log(Math.PI.toFixed(10))
console.groupEnd("circle")
