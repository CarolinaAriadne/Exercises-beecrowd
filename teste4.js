let number = parseFloat(4.10);

function roundValue(val){
  return parseFloat(val.toFixed(2));
}

const notas = {
  cem: 100,
  cinquenta: 50,
  vinte: 20,
  dez: 10,
  cinco: 5,
  dois: 2,
};

const moedas = {
  umReal: 1.0,
  cinquenta: 0.5,
  vinteCinco: 0.25,
  dez: 0.1,
  cinco: 0.5,
  umCentavo: 0.01,
};

let count1 = Math.trunc(number / notas.cem); // NOTAS

let count2 = roundValue(number - count1 * notas.cem);

let count3 = Math.trunc(count2 / notas.cinquenta); // notas

let count4 = roundValue(count2 - count3 * notas.cinquenta);

let count5 = Math.trunc(count4 / notas.vinte); // notas

let count6 = roundValue(count4 - count5 * notas.vinte);

let count7 = Math.trunc(count6 / notas.dez); // notas

let count8 = roundValue(count6 - count7 * notas.dez);

let count9 = Math.trunc(count8 / notas.cinco); // notas

let count10 = roundValue(count8 - count9 * notas.cinco);

let count11 = Math.trunc(count10 / notas.dois); // notas

let count12 = roundValue(count10 - count11 * notas.dois);

let count13 = Math.trunc(count12 / moedas.umReal) ; // moedas + 0.00001

let count14 = roundValue(count12 - count13 * moedas.umReal);

let count15 = Math.trunc(count14 / moedas.cinquenta); // moedas

let count16 = roundValue(count14 - count15 * moedas.cinquenta);

let count17 = Math.trunc(count16 / moedas.vinteCinco); // moedas

let count18 = roundValue(count16 - count17 * moedas.vinteCinco);

let count19 = Math.trunc(count18 / moedas.dez); // moedas

let count20 = roundValue(count18 - count19 * moedas.dez);

let count21 = Math.trunc(count20 / moedas.cinco); // moedas

let count22 = roundValue(count20 - count21 * moedas.cinco);

let count23 = Math.trunc(count22 / moedas.umCentavo); // moedas

let count24 = roundValue(count22 - count23 * moedas.umCentavo);

console.log(`NOTAS:
${count1} nota(s) de R$ 100.00
${count3} nota(s) de R$ 50.00
${count5} nota(s) de R$ 20.00
${count7} nota(s) de R$ 10.00
${count9} nota(s) de R$ 5.00
${count11} nota(s) de R$ 2.00 `);
console.log(`MOEDAS:
${count13} moeda(s) de R$ 1.00
${count15} moeda(s) de R$ 0.50
${count17} moeda(s) de R$ 0.25
${count19} moeda(s) de R$ 0.10
${count21} moeda(s) de R$ 0.05
${count23} moeda(s) de R$ 0.01

`);

// let number = parseFloat(lines[0])

// console.log('NOTAS:')
// console.log(`${count1} nota(s) de R$ 100.00`);
// console.log(`${count3} nota(s) de R$ 50.00`);
// console.log(`${count5} nota(s) de R$ 20.00`);
// console.log(`${count7} nota(s) de R$ 10.00`);
// console.log(`${count9} nota(s) de R$ 5.00`);
// console.log(`${count11} nota(s) de R$ 2.00 `);
// console.log('MOEDAS:')
// console.log(`${count13} moeda(s) de R$ 1.00`);
// console.log(`${count15} moeda(s) de R$ 0.50`);
// console.log(`${count17} moeda(s) de R$ 0.25`);
// console.log(`${count19} moeda(s) de R$ 0.10`);
// console.log(`${count21} moeda(s) de R$ 0.05`);
// console.log(`${count23} moeda(s) de R$ 0.01`);




