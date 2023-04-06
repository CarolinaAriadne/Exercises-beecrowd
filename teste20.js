let lines = ["3002.00", ""];

let entrada = lines.shift().split(" ");

console.log(entrada)

// let number1 = +entrada[0];
// let isento = 2000.00;
// let salarioAcima = 4500.00;
// let doisMilUmCentavo = 2000.01;
// let tresMil = 3000.00
// let tresMilUmCentavo = 3000.01;

let number1 = +entrada[0];
let subtrai = 0;
let imposto = 0;
let conta = 0;
let conta2 = 0;

if (number1 >= 0 && number1 <= 2000.0) {
  console.log("Isento");
}
if (number1 > 4500.0) {
  subtrai = number1 - 4500.0;

  imposto = subtrai * 0.28;

  conta = 4500.0 - 3000.01;

  conta = conta * 0.18;

  conta2 = 3000.0 - 2000.0;
  conta2 = conta2 * 0.08;

  imposto = imposto + conta + conta2;

  console.log(`O imposto é ${imposto.toFixed(2)}`);
}
if (number1 >= 3000.01 && number1 <= 4500.0) {
  subtrai = number1 - 3000.01;

  imposto = subtrai * 0.18;

  conta = 3000.0 - 2000.0;

  conta2 = conta * 0.08;

  imposto = imposto + conta2;

  console.log(`O imposto é ${imposto.toFixed(2)}`);
}
if (number1 >= 2000.01 && number1 <= 3000.0) {
  subtrai = number1 - 2000.0;

  imposto = subtrai * 0.08;

  console.log(`O imposto é ${imposto.toFixed(2)}`);
}
