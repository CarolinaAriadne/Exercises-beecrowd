let entrada = ["0.0 0.0", ""];

let numbers = entrada.shift().split(" ");
// console.log(numbers);
let number1 = parseFloat(numbers[0]);
let number2 = parseFloat(numbers[1]);
// console.log(typeof number2);

if (number1 === 0.0 && number2 === 0.0) {
  console.log("Origem");
}

else if (number1 > 0.0 && number2 > 0.0) {
  console.log("Q1");
}

else if (number1 < 0.0 && number2 > 0.0) {
  console.log("Q2");
}

else if (number1 < 0.0 && number2 < 0.0) {
  console.log("Q3");
}

else if (number1 > 0.0 && number2 < 0.0) {
  console.log("Q4");
}
else if (number1 === 0.0) {
  console.log("Eixo Y");
}

else if (number2 === 0.0) {
  console.log("Eixo X");
}
