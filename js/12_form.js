let form = document.querySelector('#loginForm');

//Écouter la modification de l'email
form.email.addEventListener('change', function () {
	validEmail(this);
});
//Écouter la modification du password
form.password.addEventListener('change', function () {
	validPassword(this);
});
//Écouter la soumission du form
form.addEventListener('submit', function (e) {
	e.preventDefault();
	if (validEmail(form.email) && validPassword(form.password)) {
		form.submit();
	}
});

//************* Validation EMAIL **************
const validEmail = function (inputEmail) {
	//Création de la reg exp pour validation email
	let emailRegExp = new RegExp(
		'^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
	);

	//Récupération de la balise SMALL
	let small = inputEmail.nextElementSibling;

	//On test l'expression régulière
	if (emailRegExp.test(inputEmail.value)) {
		small.innerHTML = "Adresse Valide";
		small.classList.remove('text-danger');
		small.classList.add('text-success');
		return true;
	} else {
		small.innerHTML = "Adresse Non Valide";
		small.classList.remove('text-success');
		small.classList.add('text-danger');
		return false;
	}
};


//************* Validation PASSWORD **************
const validPassword = function (inputPassword) {
	let msg;
	let valid = false;
	//Au moins 3 caractères
	if (inputPassword.value.length < 3) {
		msg = 'le mot de passe doit contenir au moins 3 caractères';
	}
	//Au moins 1 maj
	else if (!/[A-Z]/.test(inputPassword.value)) {
		msg = 'le mot de passe doit contenir au moins 1 maj';
	}
	//Au moins 1 min
	else if (!/[a-z]/.test(inputPassword.value)) {
		msg = 'le mot de passe doit contenir au moins 1 min';
	}
	//Au moins 1 chiffre
	else if (!/[0-9]/.test(inputPassword.value)) {
		msg = 'le mot de passe doit contenir au moins 1 chiffre';
	}
	//Mot de passe valide
	else {
		msg = 'le mot de passe est valide';
		valid = true;
	}
	//Affichage
	//Récupération de la balise SMALL
	let small = inputPassword.nextElementSibling;

//On test l'expression régulière
	if (valid) {
		small.innerHTML = 'Mot de passe Valide';
		small.classList.remove('text-danger');
		small.classList.add('text-success');
		return true;
	} else {
		small.innerHTML = msg;
		small.classList.remove('text-success');
		small.classList.add('text-danger');
		return false;
	}
};


