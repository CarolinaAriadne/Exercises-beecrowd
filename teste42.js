let j = 1;

for (let index = 0; index <= 2; index += 0.2) {
  console.log(`I=${index} J=${j}`);

  console.log(`I=${index} J=${(j = j + 1)}`);

  console.log(`I=${index} J=${(j = j + 1)}`);

  j = j - 1.8;

  if (index < 2) {
    console.log(`I=${(index = index + 0.2)} J=${j}`);

    console.log(`I=${index} J=${(j = j + 1)}`);

    console.log(`I=${index} J=${(j = j + 1)}`);
  }

  j = j - 1.8;
}
