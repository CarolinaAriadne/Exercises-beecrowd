let lines = ["Dia 5", "08 : 12 : 23", "Dia 9", "06 : 13 : 23", ""];

lines.pop();

let diaENumberInicial = lines[0];

let diaENumberFinal = lines[2];

let tempoInicial = lines[1];

let tempoFinal = lines[3];

let diaInicial = +diaENumberInicial.slice(3);

let horaInicial = +tempoInicial.slice(0, 2);

let minutoInicial = +tempoInicial.slice(5, 7);

let segundoInicial = +tempoInicial.slice(10);

let diaFinal = +diaENumberFinal.slice(3);

let horaFinal = +tempoFinal.slice(0, 2);

let minutoFinal = +tempoFinal.slice(5, 7);

let segundoFinal = +tempoFinal.slice(10);

function dataInicialParaSegundos() {
  let diaInicialEmSegundos = diaInicial * 24 * 60 * 60;

  let horaInicialEmSegundos = horaInicial * 60 * 60;

  let minutoInicialEmSegundos = minutoInicial * 60;

  let dataInicialEmSegundos =
    segundoInicial +
    diaInicialEmSegundos +
    horaInicialEmSegundos +
    minutoInicialEmSegundos;

  return dataInicialEmSegundos;
}

let returnFunctionDataInicial = dataInicialParaSegundos();

function dataFinalParaSegundos() {
  let diaFinalEmSegundos = diaFinal * 24 * 60 * 60;

  let horaFinalEmSegundos = horaFinal * 60 * 60;

  let minutoFinalEmSegundos = minutoFinal * 60;

  let dataFinalEmSegundos =
    segundoFinal +
    diaFinalEmSegundos +
    horaFinalEmSegundos +
    minutoFinalEmSegundos;

  return dataFinalEmSegundos;
}

let returnFunctionDataFinal = dataFinalParaSegundos();

let subtraiDatas = 0;

if (returnFunctionDataFinal > returnFunctionDataInicial) {
  subtraiDatas = returnFunctionDataFinal - returnFunctionDataInicial;
}

if (returnFunctionDataFinal < returnFunctionDataInicial) {
  subtraiDatas = returnFunctionDataInicial - returnFunctionDataFinal;
}

if (subtraiDatas < 60) {
  subtraiDatas = 60;
}

function segundosParaDiaHoraMinutoSegundos(segundos) {
  let dia = Math.floor(segundos / (3600 * 24));
  let hora = Math.floor((segundos % (3600 * 24)) / 3600);
  let minuto = Math.floor((segundos % 3600) / 60);
  let segundo = Math.floor(segundos % 60);

  console.log(`${dia} dia(s)`);
  console.log(`${hora} hora(s)`);
  console.log(`${minuto} minuto(s)`);
  console.log(`${segundo} segundo(s)`);
}

segundosParaDiaHoraMinutoSegundos(subtraiDatas);

// console.log(returnFunctionDataInicial)

// let diaFinalEmSegundos = diaFinal * 24 * 60 * 60;

// let horaFinalEmSegundos = horaFinal * 60 * 60;

// let minutoFinalEmSegundos = minutoFinal * 60;

// let dataFinalEmSegundos =
//   segundoFinal +
//   diaFinalEmSegundos +
//   horaFinalEmSegundos +
//   minutoFinalEmSegundos;

//   console.log(dataInicialEmSegundos)
//   console.log(dataFinalEmSegundos)

// console.log(subtraiDatas);

// console.log(minutoInicialEmSegundos);

// // console.log(minutoInicial)
// // console.log(horaInicial)
// // console.log(horaInicial)

// // console.log(horaFinal);

// let time1 = 0;
// let time2 = 0;
// let time = 0;

// minutoInicial = minutoInicial + (horaInicial * 60);
// minutoFinal = minutoFinal + (horaFinal * 60);
// segundoInicial = segundoInicial + (minutoInicial * 0.60);
// segundoFinal = segundoFinal + (minutoFinal * 0.60);
// time1 = minutoFinal - minutoInicial;
// time2 = segundoFinal - segundoInicial;
// time = time1 - time2;

// // console.log(horaFinal)
// // console.log(minutoFinal)
// console.log(minutoInicial)
// console.log(minutoFinal)
// console.log(segundoInicial)
// console.log(segundoFinal)
// console.log(time1)
// console.log(time2)
// console.log(time)

// // if (time <= 0) { //  se for <= 0, é outro dia
// //   time = time + 24 * 60;
// // }

// //  console.log(time)

// // let horaInicial = parseInt(entrada[0]);
// // let minutoInicial = parseInt(entrada[1]);
// // let horaFinal = parseInt(entrada[2]);
// // let minutoFinal = parseInt(entrada[3]);
// // let time = 0;
// // let hora = 0;
// // let minutos = 0;

// // // tudo para minutos:

// // minutoInicial = minutoInicial + horaInicial * 60;
// // minutoFinal = minutoFinal + horaFinal * 60;
// // time = minutoFinal - minutoInicial;

// // console.log(minutoInicial);
// // console.log(minutoFinal);
// // console.log(time);

// // if (time <= 0) { //  se for <= 0, é outro dia
// //   time = time + 24 * 60;
// // }

// // hora =  parseInt(time / 60)
// // minutos = time % 60;
