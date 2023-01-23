let numbers2 = ['2 3', ''];

let numbers = numbers2.shift().split(' ');


let codigo = parseInt(numbers[0])
let quantidade = parseInt(numbers[1])


const preco = {
  cachorroQuente: 4.0,
  xSalada: 4.5,
  xBacon: 5.0,
  TorradaSimples: 2.0,
  Refrigerante: 1.5,
};

function totalPreco (codigo, quantidade) {
   if(codigo === 1){
       valor = preco.cachorroQuente * quantidade;
   };
   if(codigo === 2){
       valor = preco.xSalada * quantidade;
   };
   if(codigo === 3){
       valor = preco.xBacon * quantidade;
   };
   if(codigo === 4){
       valor = preco.TorradaSimples * quantidade;
   }
   if(codigo === 5){
       valor = preco.Refrigerante * quantidade;
   }

   return valor.toFixed(2);
   
};

 console.log(`Total: R$ ${totalPreco(codigo, quantidade)}`);

