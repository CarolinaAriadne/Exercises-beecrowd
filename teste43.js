let lines = ["7", "4 5", "13 10", "6 4", "3 3", "3 5", "3 4", "3 8"];

let withoutInput = lines.shift().split(" ");

console.log(withoutInput, 'aqui');

let biggerArray = [];

let x = "";

let y = "";

for (let index = 0; index < lines.length; index += 1) {
  biggerArray.push(lines[index].split(" "));
}

for (let index = 0; index < biggerArray.length; index += 1) {
  let value = biggerArray[index];
  for (let y = 0; y < value.length; y += 1) {
    console.log(value[y]);
  }
}

// console.log(biggerArray);


// console.log(acessArrays);
