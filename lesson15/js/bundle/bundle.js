(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function(){

	let tab = require("../part/tab.js");	
	let scroll = require("../part/scroll.js");
	let modal = require("../part/modal.js");
	let slider = require("../part/slider.js");
	let calc = require("../part/calc.js");
	let timer = require("../part/timer.js");

	tab();
	scroll();
	modal();
	slider();
	calc();
	timer();
})


},{"../part/calc.js":2,"../part/modal.js":3,"../part/scroll.js":4,"../part/slider.js":5,"../part/tab.js":6,"../part/timer.js":7}],2:[function(require,module,exports){
function calc() {
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
}

module.exports = calc;
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
function scroll() {
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
}

module.exports = scroll;
},{}],5:[function(require,module,exports){
function slider() {
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
}

module.exports = slider;
},{}],6:[function(require,module,exports){
function tab() {
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

}

module.exports = tab;
},{}],7:[function(require,module,exports){
function timer() {
	let deadline = '2018-06-24';

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

}

module.exports = timer;
},{}]},{},[1]);
