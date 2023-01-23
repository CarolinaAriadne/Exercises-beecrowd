let lines = [ '0 0', '' ];
let entrada = lines.shift().split(' ');

console.log(entrada);

let horaInicial = +entrada[0];
let horaFinal = +entrada[1];


if(horaFinal > horaInicial){
    console.log(`O JOGO DUROU ${horaFinal - horaInicial} HORA(S)`);
};
if(horaFinal < horaInicial){
    let horas = (horaFinal - horaInicial) + 24;
    console.log(`O JOGO DUROU ${horas} HORA(S)`);
};
if(horaInicial === horaFinal){
    console.log(`O JOGO DUROU 24 HORA(S)`);
};




