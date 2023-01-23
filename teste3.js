let age = 400 // em dias

let year = 365; // 1 ano, em dias

let month = 30; // dias

let year2 = Math.trunc(age / year);

let resto = age % year;

let month2 = Math.trunc(resto / 30);

let resto2 = Math.trunc(resto % 30)


console.log(year2);
console.log(resto);
console.log(month2);
console.log(resto2);

