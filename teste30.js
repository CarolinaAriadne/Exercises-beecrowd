let lines = ["6", "-5", ""];

lines.pop();

let number1 = +lines[0];

let number2 = +lines[1];

let newArray = [number1, number2];

let ordenaArray = newArray.sort((a, b) => {
  return a - b;
});


let firstNumber = ordenaArray[0];
let secondNumber = ordenaArray[1];

let array = [];

for (let index = firstNumber + 1; index < secondNumber; index += 1) {
  array.push(index);
}

let numbersImpares = array.filter((number) => {
    return number % 2  !== 0;
})

let sumNumbers = numbersImpares.reduce((acc, curr) => {
    return acc + curr;
},0)

console.log(sumNumbers);



