const APIKEY = '693aaece76c387bd2e7bbe0e662d8970';

//Appel a l'API open weather avec ville en paramètre de function
let apiCall = function (city){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${APIKEY}`;

	fetch(url).then( response => response.json().then((data) => {
			console.log(data);
			document.querySelector('#city').innerHTML = data.name;
			document.querySelector('#temp').innerHTML =
				"<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
			document.querySelector('#humidity').innerHTML =
				"<i class='fas fa-tint'></i>" + data.main.humidity + '%';
			document.querySelector('#wind').innerHTML =
				"<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
		})
	).catch(err => console.log('Erreur : ' + err));
}

//Écouteur d'évènement sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function (e){
	e.preventDefault();
	let ville = document.querySelector('#inputCity').value;

	apiCall(ville);
})

//Appel par défaut au chargement de la page
apiCall('Dijon')
