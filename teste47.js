let lines = ["2 2", "3 -2", "-8 -1", "-7 1", "0 2", ""];

lines.pop();

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

const quadranteCartesiano = (arr) => {
  let i = 0;

  while (i < arr.length) {
    for (let index = 0; index < arr.length; index += 1) {

      if (arr[index][0] > 0 && arr[index][1] > 0) {
        console.log("primeiro");
      }
      if (arr[index][0] < 0 && arr[index][1] > 0) {
        console.log("segundo");
      }
      if (arr[index][0] < 0 && arr[index][1] < 0) {
        console.log("terceiro");
      }
      if (arr[index][0] > 0 && arr[index][1] < 0) {
        console.log("quarto");
      }
      i = i + 1;
    }
  }
};

quadranteCartesiano(result);

