//alert ("Muito bem Vindxs, Caralha!")

console.log("Olá Mundo!")


// Aqui fazemos uma validação da variavel num//
// se o valor da varivel for igual, retornar a variavel//
let num = 10
if (num === 10) {
    console.log(num)
}

//Aqui fazemos com mais que uma opção//
// utilizamos else if, para fazer uma nva validação//
// utilição else no caso e nenhum outra opção seja encontrada.//
let num2 = 10
if (num2 === 9) {
    console.log(num2)
} else if( num2 === 11) {
    console.log(num2)
} else {
    console.log("Valor não encontrado!")
}

//Utilizando o switch para fazer confições. //
// Neste atribuimos um valor a variavel mês e fazemos os cases//

let mes = "Janeiro"

switch (mes) {
    case "Fevereiro":
        console.log("Mês 2");
        break;

    case "Março":
        console.log("Mês 3");
        break;

    case "Janeiro":
        console.log("Mês 1");
        break;

    default:
        console.log("Nenhum mês encontrado");

}