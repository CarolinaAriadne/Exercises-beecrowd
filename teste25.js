let lines = [ '7', '-5', '6', '-3.4', '4.6', '12', '' ];

lines.pop();


let newArray = lines.map((number) => {
    return Number(number)
});

let numbersPositive = newArray.filter((number) => {
    return number >= 0;
})

console.log(numbersPositive)

let lengthPositiveNumbers = numbersPositive.length;

console.log(lengthPositiveNumbers)

let sum = numbersPositive.reduce((prev,curr) => {
    return prev + curr;
}, 0)

let media = sum / lengthPositiveNumbers;

console.log(`${lengthPositiveNumbers} valores positivos`)
console.log(`${media.toFixed(1)}`)