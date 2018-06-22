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