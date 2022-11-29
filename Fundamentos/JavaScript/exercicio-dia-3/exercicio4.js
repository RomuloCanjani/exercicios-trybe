let maiorprimo = 0;

for (let numero = 2; numero <= 50; numero += 1)  {
    let primo = true;
    for (let divisao = 2; divisao < numero; divisao += 1) {
        if (numero % divisao === 0) {
            primo = false;
        }
    }
    if (primo) {
        maiorprimo = numero;
    }
}
console.log(maiorprimo)