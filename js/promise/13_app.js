//Création de la promesse USERS

const promiseGetUsers = new Promise((resolve, reject) => {
	setTimeout(function () {
		if (typeof USERS !== 'undefined') {
			resolve(USERS);
		} else {
			reject('Accès au users impossible');
		}
	}, 2000)
});

//Récupérer l'état de la promesse

promiseGetUsers
	.then(u => {
		let liste = '<ul>';
		for (let user of u) {
			liste += `<li>${user.name}</li>`;
		}
		liste += '</ul>';
		document.querySelector("#users").innerHTML = liste;
	})
	//Permet de chaîner les users
	// .then(function (nbUsers) {
	// 	console.log(`Il y a : ${nbUsers} utilisateurs`);
	// })
	.catch(e => {
		console.log(e)
	});



//Création de la promesse NEWS

const promiseGetNews = new Promise(function (resolve, reject) {
	setTimeout(function () {
		if (typeof NEWS !== 'undefined') {
			resolve(NEWS);
		} else {
			reject('Accès au users impossible');
		}
	}, 2000)
});

//Récupérer l'état de la promesse

promiseGetNews
	.then(function (n) {
		let liste = '<ul>';
		for (let actu of n) {
			liste += `<li>${actu.title}</li>`;
		}
		liste += '</ul>';
		document.querySelector("#news").innerHTML = liste;
	})
	//Permet de chaîner les users
	// .then(function (nbUsers) {
	// 	console.log(`Il y a : ${nbUsers} utilisateurs`);
	// })
	.catch(function (e) {
		console.log(e)
	});

