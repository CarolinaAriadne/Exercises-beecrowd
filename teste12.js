let lines = ["6.0 4.0 2.0", ""];

let entrada = lines.shift().split(" ");

const array = entrada.sort((number1, number2) => {
  return number2 - number1;
});

let biggerNumber = +array[0];

let numberA = +array.shift();

let numberArray = [];

for (let i = 0; i < array.length; i++) {
  numberArray.push(+array[i]);
}

// console.log(numberArray);

const sum = numberArray.reduce((soma, i) => {
  return soma + i;
});

// console.log(sum);
// console.log(biggerNumber);

if (sum > biggerNumber) {
    let somar = sum + biggerNumber;
  console.log(`Perimetro = ${somar.toFixed(1)}`);
}

if (sum <= biggerNumber) {
  let numberB = +entrada[0];
  let numberC = +entrada[1];
  let area = ((numberA + numberB) * numberC) / 2;
  console.log(`Area = ${area.toFixed(1)}`);
}
