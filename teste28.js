let lines = [ '101', '' ];


let entrada = Number(lines[0]);

let arrayNumbers = [];

 for (let index = 0; index <= entrada; index +=1){
        arrayNumbers.push(index)
 }
    


let arrayImpares = arrayNumbers.filter((number) => {
    return number % 2 !== 0;
})



for(let index = 0; index <= arrayImpares.length -1; index +=1){
    console.log(arrayImpares[index])
}













