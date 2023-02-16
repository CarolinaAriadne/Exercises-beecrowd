let lines = [
  "10",
  "10 C",
  "6 R",
  "15 S",
  "5 C",
  "14 R",
  "9 C",
  "6 R",
  "8 S",
  "5 C",
  "14 R",
  "",
];

lines.pop();

let casosTeste = lines.slice(1);

let filterC = casosTeste.filter((value) => {
  return value.includes("C");
});

let filterS = casosTeste.filter((value) => {
  return value.includes("S");
});

let filterR = casosTeste.filter((value) => {
  return value.includes("R");
});

let coelho = filterC.map((value) => {
  return Number(value.slice(0, -2));
});

let rato = filterR.map((value) => {
  return Number(value.slice(0, -2));
});

let sapo = filterS.map((value) => {
  return Number(value.slice(0, -2));
});

let todasCobaias = [...coelho, ...rato, ...sapo].reduce((cur, acu) => {
  return cur + acu;
}, 0);

let sumCoelho = coelho.reduce((cur, acum) => {
  return cur + acum;
}, 0);

let sumRato = rato.reduce((cur, acum) => {
  return cur + acum;
}, 0);

let sumSapo = sapo.reduce((cur, acum) => {
  return cur + acum;
}, 0);

let percentualCoelho = (sumCoelho / todasCobaias) * 100;
let percentualRato = (sumRato / todasCobaias) * 100;
let percentualSapo = (sumSapo / todasCobaias) * 100;

console.log(`Total: ${todasCobaias} cobaias`);
console.log(`Total de coelhos: ${sumCoelho}`);
console.log(`Total de ratos: ${sumRato}`);
console.log(`Total de sapos: ${sumSapo}`);
console.log(`Percentual de coelhos: ${percentualCoelho.toFixed(2)} %`);
console.log(`Percentual de ratos: ${percentualRato.toFixed(2)} %`);
console.log(`Percentual de sapos: ${percentualSapo.toFixed(2)} %`);


