//Mettre en place les span dans les li
let tabLi = document.querySelectorAll('ul li');
console.log(tabLi)
for (let li of tabLi){
	let span = document.createElement('span');
	let i = document.createElement('i');
	i.classList.add('fa-solid','fa-check');
	// span.classList.add('check');
	// span.appendChild(i);
	li.appendChild(span);
	li.addEventListener('click', function (){
		console.log(this.children[0])
		this.children[0].classList.toggle('check');
		if (this.children[0].classList == 'check'){
			this.children[0].appendChild(i);
		}else{
			this.children[0].removeChild(i)
		}
	});
}
