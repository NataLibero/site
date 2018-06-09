var open = document.getElementById('open-btn');
var name_value = document.getElementsByClassName('name-value')[0];
var budget_value = document.getElementsByClassName('budget-value')[0];
var goods_value = document.getElementsByClassName('goods-value')[0];
var items_value = document.getElementsByClassName('items-value')[0];
var employers_value = document.getElementsByClassName('employers-value')[0];
var discount_value = document.getElementsByClassName('discount-value')[0];
var isopen_value = document.getElementsByClassName('isopen-value')[0];
var discount_price = document.getElementsByClassName('discount-price')[0];
var full_price = document.getElementsByClassName('full-price')[0];

var goods_item = document.getElementsByClassName('goods-item');
var goods_btn = document.getElementsByTagName('button')[1];
var budget_btn = document.getElementsByTagName('button')[2];
var employers_btn = document.getElementsByTagName('button')[3];
var choose_item = document.querySelector('.choose-item');
var time_value = document.querySelector('.time-value');
var count_budget_value = document.querySelector('.count-budget-value');
var hire_employers_item = document.querySelectorAll('.hire-employers-item');

var money;
var price;
var shopTitle;
var your_price;

open.addEventListener('click', () => {

	do {
		money = prompt("Ваш бюджет на месяц?", "");
	} while(isNaN(money) || money == null || money == "");

	budget_value.innerHTML = money;
	mainList.budget = money;

	shopTitle = prompt("Название вашего магазина?", "").toUpperCase();
	mainList.shopTitle = shopTitle;
	name_value.textContent = shopTitle;

	mainList.open = confirm('Желаете подключить дисконтную систему?');

	if(mainList.open) {		
		get_discount();
	}
})

goods_btn.addEventListener('click', () => {
	for (var i = 0; i < goods_item.length; i++) {
		var a = goods_item[i].value;
		if ((typeof(a)) === 'string' && a.length < 10 && a != '') {
			console.log('все верно');
			mainList.shopGoods[i] = a;
			//goods_value.innerHTML += a + ', ';
			goods_value.textContent = mainList.shopGoods;
		} else {
			console.log('ввод некорректный');
			//i--;
		}
	}
});

choose_item.addEventListener('change', () => {
	var items = choose_item.value;

	if (isNaN(items) && items != ""){
		mainList.shopItems = items.split(", ");
		mainList.shopItems.sort();
		items_value.textContent = mainList.shopItems;
	}	
});

time_value.addEventListener('change', () => {
	var time = time_value.value;
	if (time < 0) {
		console.log('не может быть');
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log('Время работать');		
		mainList.open = true;
		budget_btn.disabled = false;
	} else if (time < 24) {
		console.log('Уже слишком поздно');
		mainList.open = false;
	} else {
		console.log('В сутках только 24 часа');
		mainList.open = false;
	}

	if(mainList.open == true) {
		isopen_value.style.backgroundColor = 'green';
	} else {
		isopen_value.style.backgroundColor = 'red';
		for(var i = 0; i < btns.length; i++) {
			btns[i].disabled = true;
		}
	}
});

budget_btn.addEventListener('click', () => {
	count_budget_value.value = mainList.budget / 30;
});

employers_btn.addEventListener('click', () => {
	for(var i = 0; i < hire_employers_item.length; i++) {
		var b = hire_employers_item[i].value;
		b = b[0].toUpperCase() + b.substr(1).toLowerCase();
		mainList['employers'][i] = b;
		   //employers_value.textContent += b + ', ';
		   employers_value.textContent += mainList.employers[i] + ', ';			
		}
	});

function get_discount() {
	your_price = prompt('Укажите цену', '');
	if(your_price !== null) {
		discount_value.style.background = 'green';
		discount_value.textContent = '20%';
		discount_price.textContent = (your_price / 100) * 80;
		full_price.textContent = your_price;
	} else {
		discount_value.textContent = 'Вам скидок нет';
	}
}

document.body.style.backgroundImage = "url('img/111.jpg')";
count_budget_value.disabled = true;

var mainList = {
	budget: money,
	shopTitle: shopTitle,	
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: []
}

console.log(mainList);


var btns = document.querySelectorAll('.main-functions button');
for(var i = 0; i < btns.length; i++) {
	btns[i].disabled = true;
}

for(var j = 0; j < hire_employers_item.length; j++){
	hire_employers_item[j].addEventListener('blur', function(){

		for(var j = 0; j < hire_employers_item.length; j++){
			if(hire_employers_item[j].value != '' && mainList.open === true){
				employers_btn.disabled = false;				
			} else {
				employers_btn.disabled = true;
			}
		}
		
	})
}

for(var k = 0; k < goods_item.length; k++){
	goods_item[k].addEventListener('blur', function(){

		for(var k = 0; k < goods_item.length; k++){
			if(goods_item[k].value != '' && mainList.open === true){
				goods_btn.disabled = false;
				break;
			} else {
				goods_btn.disabled = true;
			}
		}
		
	})
}

