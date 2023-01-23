let lines = ['10.0, 3.0, 5.0', '']; //['10.0 3.0 5.0', '']

let values = lines.shift().split(' ')

let a = parseFloat(values[0]);
let b = parseFloat(values[1]);
let c = parseFloat(values[2]);

let delta = b * b - 4 * a * c;

if (a === 0) {
  console.log("Impossivel calcular");
} else {
  if (delta < 0) {
    console.log("Impossivel calcular");
  }
  if (delta > 0) {
    R1 = (-b + Math.sqrt(delta)) / (2 * a);
    R2 = (-b - Math.sqrt(delta)) / (2 * a);

    let fixedR1 = R1.toFixed(5);
    let fixedR2 = R2.toFixed(5);

    console.log(`R1 = ${fixedR1}`);
    console.log(`R2 = ${fixedR2}`);
  }
}
