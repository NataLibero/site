window.addEventListener('DOMContentLoaded', function(){

	let tab = document.getElementsByClassName('info-header-tab');
	let tabContent = document.getElementsByClassName('info-tabcontent');
	let info = document.getElementsByClassName('info-header')[0];

	let hideTabContent = (a) => {
		for(var i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	hideTabContent(1);

	let showTabContent = (b) => {
		if(tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', (event) => {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for(var i = 0; i < tab.length; i++) {
				if(target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	})

// Timer
	let deadline = '2018-06-18';

	let getTimeRemaining = (endtime) => {

	let t = Date.parse(endtime) - Date.parse(new Date());
	let seconds = Math.floor( (t/1000) % 60);
	let minutes = Math.floor( (t/1000 / 60) % 60);
	let hours = Math.floor( (t/(1000*60*60)) );

	return {
		'total': t,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
};

	let setClock = (id, endtime) => {

	let timer = document.getElementById(id);
	let hours = timer.querySelector('.hours');
	let minutes = timer.querySelector('.minutes')
	let seconds = timer.querySelector('.seconds');

	let updateClock = () => {
		let t = getTimeRemaining(endtime);
		hours.innerHTML = addZero(t.hours);
		minutes.innerHTML = addZero(t.minutes);
		seconds.innerHTML = addZero(t.seconds);

		if(t.total <= 0){
			clearInterval(timeInterval);
			hours.innerHTML = addZero(0);
			minutes.innerHTML = addZero(0);
			seconds.innerHTML = addZero(0);
		}
	};

	updateClock();
	var timeInterval = setInterval(updateClock, 1000)
};

setClock('timer', deadline);

function addZero(num){
	if(num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

// scrolling

let linkNav = document.querySelectorAll('nav ul [href^="#"]');
linkNav.forEach((item, idx, arr) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();
		let targetID = item.getAttribute('href');
		let targetBlock = document.querySelector(targetID);
		window.scrollTo({
			top: targetBlock.getBoundingClientRect().top,
			behavior: 'smooth'
		});
	});
});



// Modal

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


// form

let message = new Object();
message.loading = "Загрузка...";
message.success = "Спасибо! Скоро мы с вами свяжемся";
message.failure = "Что-то пошло не так...";

let form = document.getElementsByClassName('main-form')[0],
	input = form.getElementsByTagName('input'),
	statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	form.addEventListener('submit', function(event){
		event.preventDefault();
		form.appendChild(statusMessage);

		//AJAX
		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//для кодировки данных

		let formData = new FormData(form); //данные из инпутов 

		request.send(formData); //отправляем эти данные на сервер

		request.onreadystatechange = function() { //событие кот. отслеживает статус готовности нашего запроса
			if(request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if(request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					// добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for(let i = 0; i < input.length; i++) {
			input[i].value = '';
			//очищаем поля ввода
		}
	});

let formContact = document.getElementById("form"),
	inputContact = formContact.getElementsByTagName("input");

	formContact.addEventListener('submit', function(event){
		event.preventDefault();
		formContact.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(formContact); 

		request.send(formData);


		request.onreadystatechange = function() { 
			if(request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if(request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;					
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}
		for(let i = 0; i < inputContact.length; i++) {
			inputContact[i].value = '';			
		}

	})







})
