let lines = ["-3.5", "5.5", "11", "-23", "-4", "10", "9", ""];

lines.pop();

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
      }
    }
  }
  return newArray;
};

let result2 = arrayPositive(result);

const media = (allArr, arrPositive) => {
  for (let index = 0; index < allArr.length; index += 1) {
    if (allArr[index] < 0 || allArr[index] > 10) {
      console.log("nota invalida");
    }
  }

  let sum = arrPositive.reduce((acc, value) => {
    return acc + value;
  });
  let media = sum / arrPositive.length;

  console.log(`media = ${media.toFixed(2)}`);
};
media(result, result2);
