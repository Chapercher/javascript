let titles = document.querySelectorAll('#tabs .tab-titles li');

for (let title of titles) {
	title.addEventListener('click', function () {
		//on récupère le numéro du titre
		let num = this.getAttribute('data-tabtitle');

		//On masque la div précédente
		document.querySelector('#tabs > div.active').classList.remove('active');

		//On réactive le div voulu
		document.querySelector('#tab' + num).classList.add('active');

		//On enlève la class du titre précédemment actif
		document.querySelector('#tabs .tab-titles li.active').classList.remove('active');

		//On active le bon titre
		this.classList.add('active');
	});
}
