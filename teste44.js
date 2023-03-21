let lines = ["5 2", "5 0", ""]; //"4 8", // "6 3"

lines.pop();

let array = [];

for (let index = 0; index < lines.length; index += 1) {
  array.push(lines[index].split(" "));
}

let newArray = [];

for (let index = 0; index < array.length; index += 1) {
  let hasSome = array[index].some((value) => {
    return Number(value) <= 0;
  });
  if (hasSome === false) {
    let arrayNumber = array[index].map((item) => {
      return Number(item);
    });
    arrayNumber = arrayNumber.sort((a, b) => {
      return a - b;
    });
    newArray.push(arrayNumber);
  }
}


for (let i = 0; i < newArray.length; i++) {
  let sum = 0;
  let impression = "";
  for (let y = newArray[i][0]; y <= newArray[i][1]; y++) {
    sum += y;
    if (impression === "") {
      impression = y;
    } else {
      impression = impression + " " + y;
    }
  }
  console.log(`${impression} Sum=${sum}`);
}
