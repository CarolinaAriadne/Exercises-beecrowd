let lines = ["400.00", ""];

let entrada = lines.shift().split(" ");

let salario = +entrada;

let novoSalario = 0;

if (salario >= 0 && salario <= 400.00) {
  let aumento = salario * 0.15;
  novoSalario = salario + aumento;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${aumento.toFixed(2)}`);
  console.log("Em percentual: 15 %");
};

if (salario >= 400.01 && salario <= 800.00) {
  let aumento = salario * 0.12;
  novoSalario = salario + aumento;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${aumento.toFixed(2)}`);
  console.log("Em percentual: 12 %");
};

if (salario >= 800.01 && salario <= 1200.00) {
    let aumento = salario * 0.10;
    novoSalario = salario + aumento;
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${aumento.toFixed(2)}`);
    console.log("Em percentual: 10 %");
};

if (salario >= 1200.01 && salario <= 2000.00) {
    let aumento = salario * 0.07;
    novoSalario = salario + aumento;
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${aumento.toFixed(2)}`);
    console.log("Em percentual: 7 %");
};

if (salario > 2000.00) {
    let aumento = salario * 0.04;
    novoSalario = salario + aumento;
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${aumento.toFixed(2)}`);
    console.log("Em percentual: 4 %");
};


