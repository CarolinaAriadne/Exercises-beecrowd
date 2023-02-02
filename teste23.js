let lines = ["7", "-5", "6", "-3.4", "-4.6", "12", ""];

lines.pop();

let numbers = lines.map((number) => {
  return Number(number);
});

let getPositiveNumbers = numbers.filter((number) => {
  return number >= 0;
});

let lengthPositiveNumbers = getPositiveNumbers.length;

console.log(`${lengthPositiveNumbers} valores positivos`);
