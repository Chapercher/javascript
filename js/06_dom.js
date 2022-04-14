console.log('Largeur de l\'écran : ' + window.innerWidth);
console.log('Chemin du fichier : ' + document.documentURI);

//Sélectionner par son ID
let title = document.getElementById('title');

//Récupère uniquement le text
console.log(title.innerText);
//Récupère uniquement le HTML
console.log(title.innerHTML);

//Modifier le contenu Text
title.innerText = 'Nouveau titre';
//Modifier le contenu HTML
title.innerHTML = '<em>Nouveau</em> titre';

//Sélectionner par sa CLASS
let citation = document.getElementsByClassName('citation');
console.log(citation);//Tableau
console.log(citation[1]);//Tableau à l'index 1

//Sélectionner par leur balise HTML
let paragraphe = document.getElementsByTagName('p');
console.log(paragraphe[0].innerHTML);//Contenu html du 1er paragraphe
console.log(paragraphe[0].innerText);//Contenu texte du 1er paragraphe

//Sélectionner avec les sélecteur CSS
console.log(document.querySelector('#title'))
console.log(document.querySelectorAll('.citation'))

//Récupérer des attributs HTML
let a = document.querySelector('a');
console.log(a.getAttribute('href'));
a.setAttribute('href', 'https://github.com/Chapercher/javascript');

//Modifier le style CSS
//document.querySelector('p').style.backgroundColor = '#aaa';

//Récupérer la liste de class CSS d'un élément HTML
console.log(document.querySelector('p').classList);

//Ajouter une class CSS à un élément HTML
//document.querySelector('p').classList.add('fondVert');

//Supprimer une class CSS à un élément HTML
//document.querySelector('p').classList.remove('fondVert');

//Sélectionner les éléments paire
let tabLi = document.querySelectorAll('ul li:nth-child(even)');
console.log(tabLi)
for(let li of tabLi){
	li.classList.add('fondVert');
}

//Tester la présence d'une class CSS sur un élément HTML
if(document.querySelector('li:nth-child(2)').classList.contains('fondVert')){
	console.log('la classe verte est affectée');
}

//Échanger la présence d'une class CSS à un élément HTML
document.querySelector('p').classList.toggle('fondVert');

//Déplacer des éléments HTML
document.querySelector('p').appendChild(document.querySelector('h1'));
