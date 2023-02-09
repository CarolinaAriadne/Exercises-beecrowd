let lines = ["7", "-6", "8", "-4", "0", ""];

lines.pop();

let arrayNumbers = lines.map((number) => {
  return Number(number);
});

let numbersPairs = arrayNumbers.filter((number) => {
  return number % 2 === 0;
});

console.log(numbersPairs);

let lengthNumbersPairs = numbersPairs.length;

console.log(`${lengthNumbersPairs} valores pares`);
