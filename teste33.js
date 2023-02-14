let lines = ["4", "-5", "0", "3", "-4", ""];

lines.pop();

let array = lines.slice(1);

let arrayNumbers = array.map((number) => {
  return Number(number);
});

let filterNumbers = arrayNumbers.map((number) => {
  if (number === 0) {
    return console.log("NULL");
  } else {
    if (number % 2 === 0 && number > 0) {
      return console.log("EVEN POSITIVE");
    }
    if (number % 2 === 0 && number < 0) {
        return console.log("EVEN NEGATIVE");
    }
    if (number % 2 !== 0 && number > 0) {
      return console.log("ODD POSITIVE");
    }
    if (number % 2 !== 0 && number < 0) {
        return console.log("ODD NEGATIVE");
    }
  }
});
