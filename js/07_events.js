let tabTr = document.querySelectorAll('tbody tr');

for (let tr of tabTr) {
	tr.addEventListener('click', function () {
		this.classList.toggle('gris');
	});
console.log(tr)
}


