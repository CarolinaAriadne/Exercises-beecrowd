let lines = [ '13', '' ]

let entrada = +lines[0]


let array = [];


for(let index = 1; index <= 10000; index +=1){
    array.push(index)
}

let numbers = array.filter((number) => {
    return number % entrada === 2;
});

let printNumbers = numbers.map((number) => {
    return console.log(number);
})