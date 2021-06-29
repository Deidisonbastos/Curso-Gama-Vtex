//alert ("Muito bem Vindxs, Caralha!")

console.log("Olá Mundo!")

let resultado = fizzBuzz(15);
    console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !== "Number")
    return "Não é um numero!";
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
    return "FizzBuzz"
}