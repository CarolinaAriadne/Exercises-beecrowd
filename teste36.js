let lines = ["3", "6.5 4.3 6.2", "5.1 4.2 8.1", "8.0 9.0 10.0", ""];

let arrayNumbers = lines.slice(1);

let array1 = arrayNumbers.shift().split(" ");

let array2 = arrayNumbers.shift().split(" ");

let array3 = arrayNumbers.shift().split(" ");

let array1Numbers = array1.map((number) => {
  return Number(number);
});

let array2Numbers = array2.map((number) => {
  return Number(number);
});

let array3Numbers = array3.map((number) => {
  return Number(number);
});

let sumArray1 = array1Numbers.reduce((cur, acum) => {
  return cur + acum;
}, 0);

let mediaArray1 = (sumArray1 * 2) / (2 + 2 + 2);

console.log(mediaArray1.toFixed(1));

let sumArray2 = array2Numbers.reduce((cur, acum) => {
  return cur + acum;
}, 0);

let mediaArray2 = (sumArray2 * 3) / (3 + 3 + 3);

console.log(mediaArray2.toFixed(1));

let sumArray3 = array3Numbers.reduce((cur, acum) => {
  return cur + acum;
}, 0);

let mediaArray3 = (sumArray3 * 5) / (5 + 5 + 5);

console.log(mediaArray3.toFixed(1));
