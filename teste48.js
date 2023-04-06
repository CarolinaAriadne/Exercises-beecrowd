let lines = ["3", "3 -2", "-8 0", "0 8"];

lines.shift();

let newArray = [];

const arrayNumbers = (arr) => {
  let array = [];

  for (let index = 0; index < arr.length; index += 1) {
    array.push(arr[index].split(" "));
  }

  for (let index = 0; index < array.length; index += 1) {
    let number = array[index].map((value) => {
      return Number(value);
    });

    newArray.push(number);
  }

  return newArray;
};

let result = arrayNumbers(lines);

console.log(result);

const resultadoDivisao = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let count = arr[i][0];
    if (arr[i][1] === 0) {
      console.log("divisao impossivel");
    }
    count = count / arr[i][1];
   
      console.log(count);
  }
};
resultadoDivisao(result);
