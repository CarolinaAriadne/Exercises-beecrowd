let lines = ["11", "15", "25", "2", "10", ""];

lines.pop();

let arrayNumbers = lines.map((number) => {
  return Number(number);
});

let bigNumber = 0;

let position = 0;

for (let index = 0; index <= arrayNumbers.length; index += 1) {
  if (arrayNumbers[index] > bigNumber) {
    bigNumber = arrayNumbers[index];
    position = index + 1; // primeira posição do array, estão considerando como 1 ao invés de 0, por isso a soma
  }
}

console.log(bigNumber);
console.log(position);










