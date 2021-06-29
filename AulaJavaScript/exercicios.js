//alert ("Muito bem Vindxs, Caralha!")

console.log("Olá Mundo!")

// Exercicio 1 = FizzBuzz
// Para ver ver a função funcionando, altere o valor de fizzBuzz. 
let resultado = fizzBuzz();
console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !== "number")
        return "Não é um numero!";
    // Aqui é: se o resto do valor da entrada divido por 3 for igual a zero. 
    // Se o resto do valor de entrada divido por 5 for igual a zero
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return "FizzBuzz";
    if (entrada % 3 === 0)
        return "Fizz";
    if (entrada % 5 === 0)
        return "Buzz";

    return entrada;
}

// Exercicio 2 - contando a letras ao inverso. 
// utilizando o for para o looping.
let newStr = "";

function reverseAString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
        console.log(newStr);
    }
}
let resultado2 = reverseAString("Ola mundo!")


// Exercicio 3 - Conversor de temperatura de celsius para fahrenheit.
// o Calculo achei no google

function ConvertToFahrenheit(value) {
    return (value * 9 / 5) + 32


}
let resultado3 = ConvertToFahrenheit(1)
console.log("O valor em Fahrenheit é: " + resultado3)



//Exercicio 4 


