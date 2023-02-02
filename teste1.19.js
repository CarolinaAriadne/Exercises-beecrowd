let time = lines[0];
let velocidade = lines[1];
let kmLitro = 12;


let distancia = time * velocidade

// 1 l - 12 km
// x   - distancia
// 12 x = distancia * 1
// x = distancia / 12


let count = distancia * 1;

let divide = count / kmLitro;

let fixed = divide.toFixed(3);

console.log(`${fixed}`);
