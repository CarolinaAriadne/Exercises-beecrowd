let nome = lines[0]
let salario = parseFloat(lines[1])
let totalVendas = parseFloat(lines[2])

let count = ((totalVendas * 0.15) + salario).toFixed(2)

console.log(`TOTAL = R$ ${count}`)