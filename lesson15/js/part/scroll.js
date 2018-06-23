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