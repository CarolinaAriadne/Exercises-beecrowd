// lines = [7]

// let number = lines[0];
// let carX = 60;
// let carY = 90;

// let diference = carY- carX;

// let tempo = (60 * number) / diference

// console.log(`${tempo} minutos`);

let number = 576;

const notas = {
  cem: 100,
  cinquenta: 50,
  vinte: 20,
  dez: 10,
  cinco: 5,
  dois: 2,
  um: 1,
};

let count1 = Math.trunc(number / notas.cem); // NOTAS

let count2 = number  - count1 * notas.cem; 
console.log(count2);

let count3 = Math.trunc(count2 / notas.cinquenta); // notas
console.log(count3);

let count4 =  count2 - count3 * notas.cinquenta; 
console.log(count4);

let count5 = Math.trunc(count4 / notas.vinte); // notas

let count6 = count4 - count5 * notas.vinte; 

let count7 = Math.trunc(count6 / notas.dez); // notas

let count8 = count6 - count7 * notas.dez;

let count9 = Math.trunc(count8 / notas.cinco); // notas

let count10 = count8 - count9 * notas.cinco; 

let count11 = Math.trunc(count10 / notas.dois) // notas

let count12 = count10 - count11 * notas.dois;

let count13 = Math.trunc(count12 / notas.um) // notas

let count14 = count12 - count13 * notas.um

console.log(`${number}
${count1}(s) de R$ 100,00
${count3}(s) de R$ 50,00
${count5}(s) de R$ 20,00
${count7}(s) de R$ 10,00
${count9}(s) de R$ 5,00
${count11}(s) de R$ 2,00 
${count13}(s) de R$ 1,00`);


// count1  count3  count5 count7 count9  count11 count13

