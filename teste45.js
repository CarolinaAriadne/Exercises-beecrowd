let lines = ["5 4", "7 2", "3 8", "2 2", ""];

lines.pop();

let array = [];

for (let index = 0; index < lines.length; index += 1) {
  array.push(lines[index].split(" "));
}

let newArray = [];

for (let index = 0; index < array.length; index += 1) {
  let number = array[index].map((value) => {
    return Number(value);
  });

  newArray.push(number);
}

for (let index = 0; index < newArray.length; index += 1) {
  if (newArray[index][0] !== newArray[index][1]) {
    if (newArray[index][0] > newArray[index][1]) {
      console.log("Decrescente");
    }
    if (newArray[index][0] < newArray[index][1]) {
      console.log("Crescente");
    }
  }
}
