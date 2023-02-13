let lines = ["8", ""];

lines.pop();

let number = +lines[0];

let newArray = [
  number,
  number + 1,
  number + 2,
  number + 3,
  number + 4,
  number + 5,
  number + 6,
  number + 7,
  number + 8,
  number + 9,
  number + 10,
  number + 11,
  number + 12,
  number + 13,
  number + 14,
  number + 15,
];

let numbersImpares = newArray.filter((n) => {
  return n % 2 !== 0;
});

console.log(numbersImpares[0]);
console.log(numbersImpares[1]);
console.log(numbersImpares[2]);
console.log(numbersImpares[3]);
console.log(numbersImpares[4]);
console.log(numbersImpares[5]);
