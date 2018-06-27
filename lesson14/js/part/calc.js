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
			if(val == '' || isInteger(val) === false || regexp.test(val) == true) {
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

	persons.addEventListener('keydown', function(e) {
        if (e.key === 'e' && persons.value.indexOf('e') == -1) e.preventDefault();
    })
    restDays.addEventListener('keydown', function(e) {
        if (e.key === 'e' && restDays.value.indexOf('e') == -1) e.preventDefault();
    })
}

module.exports = calc;