// Boucle for
for (let i = 0; i < 3; i++) {
	console.log('Boucle : ' + i)
}


// parcourir un tableau
let tab = ['Pomme', 'Fraises', 'Poires', 'Bananes'];

console.log('--FOR--');
for (let i = 0; i < tab.length; i += 1) {
	console.log(tab[i]);
}

console.log('--WHILE--');
let j = 0;
while (j < tab.length) {
	console.log(tab[j]);
	j += 1;
}

console.log('--DO WHILE--');
let k = 0;
do {
	console.log(tab[k]);
	k += 1;
} while (k < tab.length)


//FOR IN : itérer sur les clés d'un objet
let voiture = {marque: 'peugeot', moteur: 'essence'};

console.log('--FOR IN--');
for (let k in voiture){
	console.log(k);
}

//FOR OF : itérer sur les valeurs d'un tableau
let tab2 = ['bleu', 'blanc', 'rouge'];

console.log('--FOR OF--');
for (let v of tab2){
	console.log(v);
}
