let value1 = lines[0];
let value2 = lines[1];

let converteValue1 = parseFloat(value1, 10);
let converteValue2 = parseFloat(value2, 10);

let pesoA = 3.5;
let pesoB = 7.5;

let sum = pesoA + pesoB

let media = ((converteValue1 * pesoA) + (converteValue2 * pesoB)) / sum;


let converte = media.toFixed(5);

console.log(`MEDIA = ${converte}`);