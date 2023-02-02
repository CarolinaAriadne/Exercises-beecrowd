let number1 = parseFloat(lines[0]);
let number2 = parseFloat(lines[1]);
let number3 = parseFloat(lines[2]);

let peso2 = 2.0;
let peso3 = 3.0;
let peso5 = 5.0;


let sum = peso2 + peso3 + peso5;

let media = ((number1 * peso2) + (number2 * peso3) + (number3 * peso5)) / sum;

let result = media.toFixed(1);

console.log(`MEDIA = ${result}`);