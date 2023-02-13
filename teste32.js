let lines = ["6", ""];

let entrada = +lines.shift();

let newArray = [];

for (let index = 1; index <= entrada; index += 1) {
  newArray.push(index);
}

let numbersPares = newArray.filter((number) => {
  return number % 2 === 0;
});

let resultAoQuadrado = numbersPares.map((number) => {
  return console.log(`${number}^2 = ${number ** 2}`);
});
