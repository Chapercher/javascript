const questions = [
	{
		question:
			'A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart',
		reponse: 2
	},
	{
		question:
			"Quelle est la capitale de l'Autriche ?\n1. Vienne\n2. Oslo",
		reponse: 1
	},
	{
		question:
			'Quel organe est perturbé par les acouphènes ?\n1. Les pieds\n2. Les oreilles',
		reponse: 2
	}
];
console.log(questions)
/*********DEBUT DU JEU***********/
let nbBonneReponse = 0;

for (let i = 0; i < questions.length; i++) {
	let repUser = prompt(questions[i].question);
	if (repUser == questions[i].reponse) {
		alert('Bonne réponse')
		nbBonneReponse++;
	}else{
		alert('Réponse fausse')
	}
}

if (nbBonneReponse <= 1){
	alert(`Vous avez ${nbBonneReponse} bonne réponse sur ${questions.length}`);
}else{
	alert(`Vous avez ${nbBonneReponse} bonnes réponses sur ${questions.length}`);
}
