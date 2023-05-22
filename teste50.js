let lines = ["-3.5", "3.5", "11.0", "10.0", "4", "1", "8.0", "9.0", "2"];

const arrayNumbers = (arr) => {
  let result = arr.map((value) => {
    return Number(value);
  });

  return result;
};

let result = arrayNumbers(lines);

const arrayPositive = (arr) => {
  let newArray = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (newArray.length < 2) {
      if (arr[index] > 0 && arr[index] <= 10) {
        newArray.push(arr[index]);
      } else {
        console.log("nota invalida");
      }
    }
    if (newArray.length === 2) {
      let sum = newArray.reduce((acc, value) => {
        return acc + value;
      });
      let media = 0;
      media = sum / newArray.length;
      console.log(`media = ${media}`);
      console.log("novo calculo (1-sim 2-nao)");
      if (arr[index + 1] < 1 || arr[index + 1] > 2) {
        console.log("novo calculo (1-sim 2-nao");
      }
      break;
    }
    // if (arr[index + 2] === 1) {
    //   continue;
    // }
    // if (arr[index + 2] === 2) {
    //   break;
    // }
  }
  // newArray = [];
  // console.log(newArray.length)
  // return newArray;
};

let result2 = arrayPositive(result);
