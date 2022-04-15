//Sélectionner toutes les lignes du tableau
let tabTr = document.querySelectorAll('tbody tr');

//Ajout d'un écouteur d'évènement au click sur toutes les lignes
for (let tr of tabTr) {
	tr.addEventListener('click', function () {
		this.classList.toggle('gris');
	});
}

document.querySelector('a').addEventListener('click', function (e){
	e.preventDefault();
	let target = this.getAttribute('href');
	let response = confirm('Vous quittez déjà le site?');

	if(response === true){
		window.location = target; //Redirection vers autre page
	}else{
		alert('Merci de rester avec nous !')
	}
})


