let j = 60;

let i = 1;

for (let index = 0; index <= 60; index += 1) {
  if (j >= 0) {
    console.log(`I=${i} J=${j}`);
    j = j - 5;
    i = i + 3;
  }
}
