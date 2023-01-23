let lines = ["0 0 0 0", ""];
let entrada = lines.shift().split(" ");

console.log(entrada);

let horaInicial = parseInt(entrada[0]);
let minutoInicial = parseInt(entrada[1]);
let horaFinal = parseInt(entrada[2]);
let minutoFinal = parseInt(entrada[3]);
let time = 0;
let hora = 0;
let minutos = 0;

// tudo para minutos:

minutoInicial = minutoInicial + horaInicial * 60;
minutoFinal = minutoFinal + horaFinal * 60;
time = minutoFinal - minutoInicial;

console.log(minutoInicial);
console.log(minutoFinal);
console.log(time);

if (time <= 0) { //  se for <= 0, é outro dia
  time = time + 24 * 60;
}

hora =  parseInt(time / 60)
minutos = time % 60;


console.log(hora);
console.log(minutos);

console.log(`O JOGO DUROU ${hora} HORA(S) E ${minutos} MINUTO(S)`);
