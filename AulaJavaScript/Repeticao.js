//alert ("Muito bem Vindxs, Caralha!")

console.log("Olá Mundo!")

// aqi fazemos uma repetivação com array. Onde dizemos os dados que irão repetir//
// atribuimos os dados a variavel array e utilizamos o for pra gerar a repetição. //

let colors = ["green", "blue", "yellow", "orange", "white"]
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// aqui pedimos a repetição para for, falando para repitir os numeros
// iniciando de 1 até <= 10 
for (let index = 1; index <= 10; index++) {
    console.log(index)
}

// aqui pedimos a repetição com While // 
let index = 0;
while (index < 10) {
    console.log(index);
    index++;
}

// Aqui eu peço para rodar o codigo e depois fazer a validação
do {
    console.log(index);
    index ++;
} while (index < 10);