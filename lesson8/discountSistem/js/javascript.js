window.addEventListener('DOMContentLoaded', function(){
 


var discountDisplay = document.querySelector(".discount-display");

discountDisplay.style.backgroundColor = 'red';

var hasDiscount = false;
var price = 0;
var discountSwitchBtn = document.querySelector("button.toggle-discount");
var discountSwithCheckbox = document.querySelector('input.toggle-discount');
var priceInput = document.querySelector('.price-input');
var priceDisplay = document.querySelector("#result");

discountSwitchBtn.addEventListener('click', function(){
	if(hasDiscount){
		hasDiscount = false;
		discountDisplay.style.backgroundColor = "red";
		this.textContent = "Включить скидку";
	} else {
		hasDiscount = true;
		discountDisplay.style.backgroundColor = "green";
		this.textContent = "Выключить скидку"
	}
	updatePrice();
});

discountSwithCheckbox.addEventListener('change', function(){
	var label = document.querySelector('label[for=' + this.id + ']');
	if(hasDiscount) {
		hasDiscount = false;
		this.checked = false;
		discountDisplay.style.backgroundColor = "red";
		label.textContent = "Скидка отключена";
	} else {
		hasDiscount = true;
		this.checked = true;
		discountDisplay.style.backgroundColor = "green";
		label.textContent = "Скидка включена"
	}
	updatePrice();
});

priceInput.addEventListener("keyup", function(){
	updatePrice();
});

function updatePrice() {
	var inputValue = priceInput.value.trim();

	if(inputValue === "") return 0;

	price = getPrice(inputValue);
	priceDisplay.textContent = price + " euro";
}

function getPrice(amount) {
	if(hasDiscount) {
		amount *= 0.8;
	}
	return amount;
}

})