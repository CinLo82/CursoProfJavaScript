// boolean
let muted: boolean = true;
muted = false;


//numeros
let numerador = 42;
let denominador = 6;
let resultado = numerador / denominador;


// string
let nombre: string = 'Cinlo';
let saludo = `Me llamo ${nombre}`;

// arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
people.push('9000');

let peopleAndNumber: Array< string | number > = [];
peopleAndNumber.push('Ricardo');
peopleAndNumber.push(9000);


// enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es : ${colorFavorito}`);


// any
let comodin: any = 'Joker';
comodin = { type: 'WildCard' };


// object
let someObject: object = { type: 'WildCard' };