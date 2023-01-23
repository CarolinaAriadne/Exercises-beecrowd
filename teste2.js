let numberSeg = 140153;

let hora = Math.trunc(numberSeg / 3600); //  3600 segundos equivale a uma hora

console.log(hora);

let resto = numberSeg % 3600;

console.log(resto);


let minutos = Math.trunc(resto / 60);

console.log(minutos);

let segundos = Math.trunc(resto  % 60);

console.log(segundos);

console.log(`${hora}:${minutos}:${segundos}`);














