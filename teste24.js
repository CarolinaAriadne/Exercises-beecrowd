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

