let lines = ["4", "14", "123", "10", "-25", ""];

lines.pop();

let firstNumber = lines.shift();

let arrayNumbers = lines.map((number) => {
  return Number(number);
});

let dentro = 0;
let fora = 0;

for (let index = 0; index < arrayNumbers.length; index += 1) {
  if (arrayNumbers[index] >= 10 && arrayNumbers[index] <= 20) {
    dentro = dentro + 1;
  } else {
    fora = fora + 1;
  }
}

console.log(`${dentro} in`);
console.log(`${fora} out`);
