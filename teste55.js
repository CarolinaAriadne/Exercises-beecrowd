let lines = ["12", "18", ""];

lines.pop();

let entrada = lines.map((value) => {
  return Number(value);
});

let ordenaValores = entrada.sort((value1, value2) => {
  return value1 - value2;
});

const criaArray = (arr) => {
  let array = [];

  for (let i = arr[0] + 1; i < arr[1]; i++) {
    array.push(i);
  }

  return array;
};

let result = criaArray(ordenaValores);

const restoDaDivisao = (arr) => {
  let arrayFinal = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 5 === 2 || arr[i] % 5 === 3) {
      arrayFinal.push(arr[i]);
    }
  }
  return arrayFinal;
};

let result2 = restoDaDivisao(result);

for (let i = 0; i <= result2.length - 1; i++) {
  console.log(result2[i]);
}
