let valueMaximo = 1000;

let array = [];

for (let index = 1; index < valueMaximo; index += 1) {
  array.push(index);
}

const main = (params) => {
  let primos = params.filter((number) => verificaPrimo(number));
  let total = primos.reduce((acc, current) => {
    return acc + current;
  })
  return total;
};

const verificaPrimo = (num) => {
  if (num <= 2) {
    return false;
  }
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      return false;
    }
  }
  return true;
};

let result = main(array);


