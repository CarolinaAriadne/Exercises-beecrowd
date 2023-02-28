let j = 5;

for (let index = 1; index <= 10; index += 2) {
  console.log(`I=${index} J=${(j = j + 2)}`);
  j = j - 1;
  console.log(`I=${index} J=${j}`);
  j = j - 1;
  console.log(`I=${index} J=${j}`);
  j  = j + 2;
}
