let array = [ '7 21 -14', '' ];
let changeArray  = array.shift().split(" ");
let copieArray = [...changeArray];
// console.log(array);
// console.log(changeArray); //string


let sortArrayGrowing = changeArray.sort((number1, number2) => {
    return number1 - number2;
});

console.log(sortArrayGrowing[0]);
console.log(sortArrayGrowing[1]);
console.log(sortArrayGrowing[2]);
console.log();
console.log(copieArray[0]);
console.log(copieArray[1]);
console.log(copieArray[2]);




