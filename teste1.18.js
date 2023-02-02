
let numberKm= lines[0];
let carX = 60;
let carY = 90;



let diference = carY - carX; //  60 minutos
// diferecente = 30


// 60min - 30 km
// x min - number km
// 30 x = 60 * number
// 30 x = 1800
// x = 1800 / 30
// x = 60


let tempo = (60 * numberKm) / diference;


console.log(`${tempo} minutos`)
