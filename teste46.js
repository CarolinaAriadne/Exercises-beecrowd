let lines = ["2200", "1020", "2002", "2022"];

const messagePassword = (array) => {
  let numbers = array.map((value) => {
    return Number(value);
  });

  let index = 0;

  while (index < numbers.length) {
    if (numbers[index] !== 2002) {
      console.log("Senha Invalida");
    }
    index = index + 1;
    if (numbers[index] === 2002) {
      console.log("Acesso Permitido");
      break;
    }
  }
};

messagePassword(lines);
