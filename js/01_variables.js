// déclaration + affectation
let prenom = 'Quentin'; // string

let age = 25; // number

let enLigne = true; // Boolean

let choix = null // Null

console.log(typeof prenom);
console.log(typeof age);
console.log(typeof enLigne);
console.log(typeof choix);

// Concatenation
console.log(prenom + ' ' + age + ' ans');
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans`);

// Echapper un caractère antislash
console.log('il fait "beau aujourd\'hui"');

const VILLE = 'Rouen';
// VILLE = 'Paris'; impossible de réassigner une nouvelle valeur à une constante

// Array
let tab = ['pomme', 30, true, ['bleu', 'rouge']];
// grandeur du tableau
console.log(tab.length);
//Index 1
console.log(tab[1]);
//Mot rouge
console.log(tab[3][1]);

//Object
let personne = {
	prenom: 'Quentin',
	age: 25,
	adress: {
		rue: '5 Rue du murot',
		ville: 'Dijon'
	}
};

console.log(personne.prenom);
console.log(personne['prenom']);
console.log(personne.adress.rue);

let a = 6;
let b = 2;

//Addition
console.log(a+b);
//Soustraction
console.log(a-b);
//Multiplication
console.log(a*b);
//Division
console.log(a/b);
//Modulo
console.log(a%b);

//Incrémenter
a += 1; //a++; équivaut à : a = a +1
console.log(a);

//Décrémenter
b -= 1; //b-- equivaut à : b = b -1
console.log(b);
