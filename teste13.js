let lines = [ '6 24', '' ];

let entrada = lines.shift().split(' ');

console.log(entrada);

let sort = entrada.sort(((a,b) => {
    return b - a;
}))

// console.log(sort);

let verifyParImpar = sort[0] % sort[1];

if(verifyParImpar === 0){
    console.log('Sao Multiplos');
}

if(verifyParImpar !== 0){
    console.log('Nao sao Multiplos');
}