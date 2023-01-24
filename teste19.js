let lines = ["19", ""];

let entrada = lines.shift().split(" ");

let number = +entrada;

let array = [61, 71, 11, 21, 32, 19, 27, 31];

let bool = array.includes(number);

if (bool) {
  if (number === array[0]) {
    console.log("Brasilia");
  }
  if (number === array[1]) {
    console.log("Salvador");
  }
  if (number === array[2]) {
    console.log("Sao Paulo");
  }
  if (number === array[3]) {
    console.log("Rio de Janeiro");
  }
  if (number === array[4]) {
    console.log("Juiz de Fora");
  }
  if (number === array[5]) {
    console.log("Campinas");
  }
  if (number === array[6]) {
    console.log("Vitoria");
  }
  if (number === array[7]) {
    console.log("Belo Horizonte");
  }
}else{
    console.log('DDD nao cadastrado');
}
