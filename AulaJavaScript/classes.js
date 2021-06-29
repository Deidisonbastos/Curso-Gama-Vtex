//alert ("Muito bem Vindxs, Caralha!")

console.log("Olá Mundo!")

// Gerando uma classe e add parametros nela. //
class books {
    constructor(title, autor, pages) {
        this.title = title;
        this.autor = autor;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}

let book = new books("Algoritimos para vivier", "Brian Wolf", 500);
console.log(book.read())



// reaproveitando a classe feita para add mais parametro //

class itBook extends books {
    constructor(title, autor, pages, tecnologia) {
        super(title, autor, pages);
        this.tecnologia = tecnologia;
    }
}

let bookIT = new itBook("Algoritimos para vivier", "Brian Wolf", 500, "Tecnologia");

console.log(bookIT.autor)


// Encapsular a clase

class Person {
    constructor(name) {
        this._name = name;

    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
}
let person = new Person ("Deidson")
person.name = "Flavia"
    console.log(person.name)



