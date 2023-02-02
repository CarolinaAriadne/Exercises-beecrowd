
let entrada = lines.shift().split(' ');

let value1 = parseInt(entrada[0])
let value2 = parseInt(entrada[1])
let value3 = parseInt(entrada[2])


let maior = 0

if (value1 > value2) {
    if (value1 > value3) {
        maior = value1
    }else {
        maior = value3
    }
}else {
    if (value2 > value3) {
        maior = value2
    }else {
        maior = value3
    }
}

console.log(`${maior} eh o maior`)
