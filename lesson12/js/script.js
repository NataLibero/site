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


// Slider

let slideIndex = 1,
slides = document.getElementsByClassName('slider-item'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
dotsWrap = document.querySelector('.slider-dots'),
dots = document.getElementsByClassName('dot');

showSlides(slideIndex);	

function showSlides(n) {

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot-active');
	}

	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides (n) {
	showSlides(slideIndex += n)
}

function currentSlide(n) {
	showSlides(slideIndex = n)
}

prev.addEventListener('click', function() {
	plusSlides(-1);
});

next.addEventListener('click', function() {
	plusSlides(1);
});

dotsWrap.addEventListener('click', function(e) {
	for(let i = 0; i < dots.length + 1; i++) {
		if(e.target.classList.contains('dot') && e.target == dots[i - 1]) {
			currentSlide(i);
		}
	}
});

	//Calc

	let persons = document.getElementsByClassName('counter-block-input')[0],
	restDays = document.getElementsByClassName('counter-block-input')[1],
	counterInputs = document.getElementsByClassName('counter-block-input'),
	place = document.getElementById('select'),
	totalValue = document.getElementById('total'),
	personsSum = 0,
	daysSum = 0,
	total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', func);
	restDays.addEventListener('change', func);

	function func() {
		let t = 0;
		personsSum = +persons.value;
		daysSum = +restDays.value;
		for(var i = 0; i < counterInputs.length; i++) {
			var val = counterInputs[i].value;
			var regexp = /\+/;
			if(val == '' || isInteger(val) === false || regexp.test(val) == true || val.indexOf("e") == '1') {
				totalValue.innerHTML = 0;
			} else {
				t++;
			}		
		}
		if(t == 2) {
			total = (personsSum + daysSum)*4000;
			totalValue.innerHTML = total;
		} else {
			totalValue.innerHTML = 0;
		}
	}
	
	place.addEventListener('change', function() {
		if (restDays.value == "" || persons.value == "") {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});

	function isInteger(x) {
		return x % 1 === 0;
	}


})

