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

let subtraiDatas = 0;

let resultDiaInicialParaSegundo = DiaParaSegundos(diaInicial);

let resultDiaFinalParaSegundo = DiaParaSegundos(diaFinal);

let resultHoraInicialParaSegundo = HoraParaSegundos(horaInicial);

let resultHoraFinalParaSegundo = HoraParaSegundos(horaFinal);

let resultMinutoInicialParaSegundo = MinutoParaSegundos(minutoInicial);

let resultMinutoFinalParaSegundo = MinutoParaSegundos(minutoFinal);

let somaDataInicial = somaDatas(
  segundoInicial,
  resultDiaInicialParaSegundo,
  resultHoraInicialParaSegundo,
  resultMinutoInicialParaSegundo
);

let somaDataFinal = somaDatas(
  segundoFinal,
  resultDiaFinalParaSegundo,
  resultHoraFinalParaSegundo,
  resultMinutoFinalParaSegundo
);

function DiaParaSegundos(dia) {
  let diaEmSegundos = dia * 24 * 60 * 60;

  return diaEmSegundos;
}

function HoraParaSegundos(hora) {
  let horaEmSegundos = hora * 60 * 60;

  return horaEmSegundos;
}

function MinutoParaSegundos(minuto) {
  let minutoEmSegundos = minuto * 60;

  return minutoEmSegundos;
}

function somaDatas(segundo, diaS, horaS, minutoS) {
  let somaDasDatas = segundo + diaS + horaS + minutoS;

  return somaDasDatas;
}

if (somaDataFinal > somaDataInicial) {
  subtraiDatas = somaDataFinal - somaDataInicial;
}

if (somaDataFinal < somaDataInicial) {
  subtraiDatas = somaDataInicial - somaDataFinal;
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
