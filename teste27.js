let lines = ["-5", "0", "-3", "-4", "12", ""];

lines.pop();

let arrayNumbers = lines.map((number) => {
  return Number(number);
});

let numbersPares = 0;
let numbersImpares = 0;
let numbersPositivos = 0;
let numbersNegativos = 0;

arrayNumbers.map((number) => {
  if (number % 2 === 0) {
    numbersPares = numbersPares + 1;
  }
  if (number % 2 !== 0) {
    numbersImpares = numbersImpares + 1;
  }
  if(number > 0){
      numbersPositivos = numbersPositivos + 1;
  }
  if(number < 0){
      numbersNegativos = numbersNegativos + 1;
  }
});

console.log(`${numbersPares} valor(es) par(es)`);
console.log(`${numbersImpares} valor(es) impar(es)`);
console.log(`${numbersPositivos} valor(es) positivo(s)`);
console.log(`${numbersNegativos} valor(es) negativo(s)`);
