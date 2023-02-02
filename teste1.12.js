
let line1 = lines.shift().split(' ')
let line2 = lines.shift().split(' ')

let numeroDePecas1 = line1[1]
let valorPeca1 = line1[2]
let numeroDePecas2 = line2[1]
let valorPeca2 = line2[2]

let count1 = numeroDePecas1 * valorPeca1
let count2 = numeroDePecas2 * valorPeca2

let sum = (count1 + count2).toFixed(2)

console.log(`VALOR A PAGAR: R$ ${sum}`)