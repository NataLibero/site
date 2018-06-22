function modal() {
	let more = document.querySelector('.more');
let descriptBtn = document.querySelectorAll('.description-btn');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.popup-close');	

more.addEventListener('click', () => {
	more.classList.add('more-splash');
	overlay.style.display = "block";
	document.body.style.overflow = "hidden";
});


for(var i = 0; i < descriptBtn.length; i++) {
	descriptBtn[i].addEventListener('click', () => {
		more.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	});
}	

close.addEventListener('click', () => {
	overlay.style.display = "none";
	more.classList.remove('more-splash');
	document.body.style.overflow = "";
});	
}

module.exports = modal;