let lines = ["7", "4 5", "13 10", "6 4", "3 3", "3 5", "3 4", "345 243" , "234 234", "345 345"];

let withoutInput = lines.shift().split(" ");

let biggerArray = [];

let newArray = [];

for(let i = 0; i < parseInt(withoutInput[0]); i++) {
  var numbers = lines[i].split(" ").map(x=>parseInt(x)).sort((a,b)=>a-b);

  var result = 0;
  for(let y = numbers[0] + 1; y  < numbers[1]; y++) {
    if(y % 2 !== 0)
    {
      result += y;
    }
  }
    console.log(parseInt(result));
}


// for (let index = 0; index < lines.length; index += 1) {
//   biggerArray.push(lines[index].split(" "));
// }


// for (let index = 0; index < parseInt(withoutInput[0]); index += 1) {
//   let arrayNumber = biggerArray[index].map((value) => {
//     return Number(value);
//   });

//   arrayNumber = arrayNumber.sort((a, b) => {
//     return a - b;
//   });

//   newArray.push(arrayNumber);
// }

// for (let i = 0; i < newArray.length; i += 1) {
//   let impression = [];
//   for (let y = newArray[i][0] + 1; y <= newArray[i][1] - 1; y += 1) {
//     impression.push(y);
//   }

//   let sum = 0;

//   for (let index = 0; index < impression.length; index += 1) {
//     if (impression[index] % 2 !== 0) {
//       sum += impression[index];
//     }
//   }
//   console.log(sum);
// }
