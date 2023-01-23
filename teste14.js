let lines = ["6.0 6.0 6.0", ""];
let entrada = lines.shift().split(" ");

console.log(entrada);

let ordena = entrada.sort((a, b) => {
  return b - a;
});

let numberA = +ordena[0];
let numberB = +ordena[1];
let numberC = +ordena[2];

let naoFormaTriangulo = numberA >= numberB + numberC;
let trianguloRetangulo =
  Math.pow(numberA, 2) === Math.pow(numberB, 2) + Math.pow(numberC, 2);
let trianguloObtusangulo =
  Math.pow(numberA, 2) > Math.pow(numberB, 2) + Math.pow(numberC, 2);
let trianguloAcutangulo =
  Math.pow(numberA, 2) < Math.pow(numberB, 2) + Math.pow(numberC, 2);
let trianguloEquilatero =
  numberA === numberB && numberA === numberC && numberB === numberC;
let triangulosIsosceles =
  numberA === numberB && numberA !== numberC && numberB !== numberC || numberA === numberC && numberA !== numberB && numberB !== numberC || numberB === numberC && numberB !== numberA && numberC !== numberA;

if (naoFormaTriangulo) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (trianguloRetangulo) {
    console.log("TRIANGULO RETANGULO");
  }
  if (trianguloObtusangulo) {
    console.log("TRIANGULO OBTUSANGULO");
  }
  if (trianguloAcutangulo) {
    console.log("TRIANGULO ACUTANGULO");
  }
  if (trianguloEquilatero) {
    console.log("TRIANGULO EQUILATERO");
  }
  if (triangulosIsosceles) {
    console.log("TRIANGULO ISOSCELES");
  }
}

