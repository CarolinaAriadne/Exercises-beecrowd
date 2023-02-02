
let values1 = lines.shift().split(' ');

let values2 = lines.shift().split(' ');

let x1 = parseFloat(values1[0]);

let y1 = parseFloat(values1[1]);

let x2 = parseFloat(values2[0]);

let y2 = parseFloat(values2[1]);

let subtraiX = x2 - x1;

let subtraiY = y2 - y1;

let potencia1 = Math.pow(subtraiX, 2);

let potencia2 = Math.pow(subtraiY, 2);

let sum = potencia1 + potencia2

let total = Math.sqrt(sum);

console.log(total.toFixed(4))