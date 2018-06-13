window.addEventListener('DOMContentLoaded', function(){

	var tab = document.getElementsByClassName('info-header-tab');
	var tabContent = document.getElementsByClassName('info-tabcontent');
	var info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for(var i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	hideTabContent(1);

	function showTabContent(b) {
		if(tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event){
		var target = event.target;
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
var deadline = '2018-06-14';

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60);
	var minutes = Math.floor( (t/1000 / 60) % 60);
	var hours = Math.floor( (t/(1000*60*60)) );

	return {
		'total': t,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
};

function setClock(id, endtime) {

	var timer = document.getElementById(id);
	var hours = timer.querySelector('.hours');
	var minutes = timer.querySelector('.minutes')
	var seconds = timer.querySelector('.seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);
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

var linkNav = document.querySelectorAll('nav ul [href^="#"]');
var V = 0.5; 
for (var i = 0; i < linkNav.length; i++) {
	linkNav[i].addEventListener('click', function(e) { 
		e.preventDefault(); 
		var w = window.pageYOffset;
		var  hash = this.href.replace(/[^#]*(.*)/, '$1'); 
		var t = document.querySelector(hash).getBoundingClientRect().top,  
		start = null;
		requestAnimationFrame(step);  
		function step(time) {
			if (start === null) start = time;
			var progress = time - start,
			r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
			window.scrollTo(0,r);
			if (r != w + t) {
				requestAnimationFrame(step)
			} else {
				location.hash = hash  
			}
		}
	}, false);
}


// Modal

var more = document.querySelector('.more');
var descriptBtn = document.querySelectorAll('.description-btn');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.popup-close');	

	more.addEventListener('click', callModal);
	for(var i = 0; i < descriptBtn.length; i++) {
		descriptBtn[i].addEventListener('click', callModal);
	}	

	function callModal() {
		more.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	}

	close.addEventListener('click', function() {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = "";
	});	
})