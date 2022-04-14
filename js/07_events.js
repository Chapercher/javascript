let tabTr = document.querySelectorAll('tbody tr');

for (let tr in tabTr) {
	tr.addEventListener('click', function () {
		this.classList.toggle('gris');
	});
}


