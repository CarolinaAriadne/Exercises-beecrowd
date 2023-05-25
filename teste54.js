let lines = ["13", "0", ""];

lines.pop();

const arrayNumbers = (arr) => {
  let result = arr.map((value) => {
    return Number(value);
  });

  return result;
};

let result = arrayNumbers(lines);

const arrayOrdenadoCrescente = (arr) => {
  let ordena = arr.sort((a, b) => {
    return a - b;
  });

  return ordena;
};

let result2 = arrayOrdenadoCrescente(result);

let valorInicial = result2[0];

const vetorPreenchido = () => {
  let arrayPreenchido = [];
  for (let i = valorInicial; i <= result2[1]; i += 1) {
    arrayPreenchido.push(i);
  }
  return arrayPreenchido;
};

let result3 = vetorPreenchido();

const verificaMultiplos = (arr) => {
  let arrayNaoMultiplos = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 13 !== 0) {
      arrayNaoMultiplos.push(arr[i]);
    }
  }
  return arrayNaoMultiplos;
};

let result4 = verificaMultiplos(result3);

const soma = (arr) => {
  let somaNumbers = arr.reduce((acumulador, valueAtual) => {
    return acumulador + valueAtual;
  });

  return somaNumbers;
};

let result5 = soma(result4);

console.log(result5)