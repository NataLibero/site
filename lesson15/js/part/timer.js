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