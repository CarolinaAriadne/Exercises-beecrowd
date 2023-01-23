let lines = ['2 3 2 6', '']

let abcd =  lines.shift().split(' ');
console.log(abcd, 'removeu primeiro elemento do array');
console.log(lines);

a = parseInt(abcd[0]);
console.log(a);
let b = parseInt(abcd[1])
console.log(b);
let c = parseInt(abcd.shift())
// console.log(c);
let d = parseInt(abcd.shift())
// console.log(d);



if((b > c) && (d > a) && (c + d) >  (a + b) && (c > 0) && (d > 0) && (a % 2 === 0)){
    console.log("Valores aceitos")
}else{
    console.log("Valores nao aceitos")
}


// [ '4 9 7 8', '' ]
// [ '2 3 2 6', '' ]

// let verifyPar = false;
// let positivo1 = false;
// let positivo2 = false;

// if (values[0] % 2 === 0) {
//   verifyPar = true;
// }

// console.log(verifyPar);

// if (values[2] > 0 || values[2] === 0) {
//   positivo1 = true;
// }

// console.log(positivo1);
// if (values[3] > 0 || values[3] === 0) {
//   positivo2 = true;
// }

// console.log(positivo2);

// let bigger1 = values[1] > values[2];
// console.log(bigger1);

// let bigger2 = values[3] > values[0];
// console.log(bigger2);

// let sum = values[2] + values[3] > values[0] + values[1];
// console.log(sum);

// if(verifyPar && positivo1 && positivo2 && bigger1 && bigger2 && sum){
//     console.log('Valores aceitos')
// }else{
//     console.log('Valores não aceitos')
// };


