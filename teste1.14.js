let value1 = parseFloat(entrada[0]); 
let value2 = parseFloat(entrada[1]); 
let value3 = parseFloat(entrada[2]);
let pi =  3.14159;

let areaTrianRetan = ((value1 * value3) / 2).toFixed(3)
let areaCirc = (pi * Math.pow(value3, 2)).toFixed(3);
let areaTrapez = (((value1 + value2) / 2) * value3).toFixed(3)
let areaQuadrado = (Math.pow(value2, 2)).toFixed(3)
let areaRetangulo = (value1 * value2).toFixed(3)


console.log(`TRIANGULO: ${areaTrianRetan}`)
console.log(`CIRCULO: ${areaCirc}`) 
console.log(`TRAPEZIO: ${areaTrapez}`)
console.log(`QUADRADO: ${areaQuadrado}`) 
console.log(`RETANGULO: ${areaRetangulo}`)