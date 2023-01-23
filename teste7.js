let entrada1 = ["75.0000000", ""];
let entrada = parseFloat(entrada1[0]);
console.log(entrada);
let frase = "";

function verifyBreak(entrada) {
  if (entrada >= 0 && entrada <= 25.00000) {
    frase = "Intervalo [0,25]";
  }
  if (entrada >= 25.00001 && entrada <= 50.0000000) {
    frase = "Intervalo (25,50]";
  }
  if (entrada >=  50.0000001 && entrada <= 75.0000000) {
    frase = "Intervalo (50,75]";
  }
  if (entrada >= 75.0000001 && entrada <= 100.0000000) {
    frase = "Intervalo (75,100]";
  }

  if (entrada < 0 || entrada > 100) {
    frase = "Fora de intervalo";
  }

  return frase;
}

console.log(verifyBreak(entrada));
