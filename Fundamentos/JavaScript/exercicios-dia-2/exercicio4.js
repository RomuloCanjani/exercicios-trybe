let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultsum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    resultsum += numbers[index];    
}

let aritmetica = resultsum / numbers.length;


if (aritmetica > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual que 20")
}