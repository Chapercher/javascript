let images = document.querySelectorAll('#galery img');
let imgActive = 0;
let interval;//Variable globale pour stocker l'interval de temps
images[imgActive].classList.add('show');

//Masquer les photos sauf la première
for (let i = 1; i < images.length; i++) {
	images[i].classList.add('hidden');
}

//Clic sur bouton suivant
document.querySelector('#next').addEventListener('click', function (){
	next();
});
//Clic sur bouton précédent
document.querySelector('#prev').addEventListener('click', function (){
	prev();
});
//Clic sur bouton play
document.querySelector('#play').addEventListener('click', function (){
	interval = setInterval(next, 2500);//Création de l'interval de temps
});
//Clic sur bouton pause
document.querySelector('#pause').addEventListener('click', function (){
	clearInterval(interval);//Suppression de l'interval de temps
});

//Function pour photo suivante
const next = function (){
	images[imgActive].classList.remove('show');
	images[imgActive].classList.add('hidden');
	imgActive++;
	if (imgActive >= images.length){
		imgActive = 0;
	}
	images[imgActive].classList.remove('hidden');
	setTimeout(() => {
		images[imgActive].classList.add('show');
	}, 300);
}

//Function pour photo précédent
const prev = function (){
	images[imgActive].classList.remove('show');
	images[imgActive].classList.add('hidden');
	imgActive--;
	if (imgActive  < 0){
		imgActive = images.length - 1;
	}
	images[imgActive].classList.remove('hidden');
	setTimeout(() => {
		images[imgActive].classList.add('show');
	}, 300);
}

//Gestion touche du clavier
window.addEventListener('keydown', function (e){
	if (e.key == 'ArrowRight'){
		next()
	}
	if (e.key == 'ArrowLeft'){
		prev()
	}
})
