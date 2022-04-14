//let age = prompt('Saisir votre age');

//Condition if

// if(age < 18){
// 	alert('Vous êtes un mineur');
// }else if(age >= 70{
// 	alert('Vous êtes sénior');
// }else{
// 	alert('Vous êtes majeur');
// }

//Condition Switch

let vehicule = prompt('Quelle véhicule souhaitez-vous? Peugeot, BMW, Ferrari').toLowerCase();
console.log(vehicule);
let km = prompt('Combien de KM souhaitez-vous faire ?');

const price = {
	peugeot: 0.4,
	bmw: 0.6,
	ferrari: 0.8,
};

switch (vehicule){
	case 'peugeot':{
		alert('Vous payerez : ' + price.peugeot * km + ' €');
		break;
	}
	case 'bmw':{
		alert('Vous payerez : ' + price.bmw * km + ' €');
		break;
	}
	case 'ferrari':{
		alert('Vous payerez : ' + price.ferrari * km + ' €');
		break;
	}
	default:
		alert('Veuillez choisir un véhicule proposé dans la liste');
}
