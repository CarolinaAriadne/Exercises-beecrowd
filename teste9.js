let entrada =  [ '9.0 4.0 8.5 9.0', '']

let numbers = entrada.shift().split(' ');
let exame = parseFloat(entrada[0]);
let number1 = parseFloat(numbers[0]);
let number2 = parseFloat(numbers[1])
let number3 = parseFloat(numbers[2])
let number4 = parseFloat(numbers[3])

let peso2 = number1 * 2;

let peso3 = number2 * 3;

let peso4 = number3 * 4;

let peso1 = number4 * 1;

let soma = peso2 + peso3 + peso4 + peso1; 

let media = soma / 10;

let mediaFinal = (media + exame) / 2;

if(media >=7){
   console.log(`Media: ${media.toFixed(1)}`)
   console.log('Aluno aprovado.')
}
if(media < 5){
    console.log(`Media: ${media.toFixed(1)}`)
    console.log('Aluno reprovado.')
}
if(media >= 5 && media <= 6.9){
    console.log(`Media: ${media.toFixed(1)}`)
    console.log('Aluno em exame.')
    console.log(`Nota do exame: ${exame.toFixed(1)}`)
    console.log('Aluno aprovado')
    console.log(`Media final: ${mediaFinal.toFixed(1)}`)
}