var cost;
var shopTitle;
var price;

function start() {
	cost = prompt("Ваш бюджет на месяц?", "");

	while(isNaN(cost) || cost == null || cost == "") {
		cost = prompt("Ваш бюджет на месяц?", "");
	}

	shopTitle = prompt("Название вашего магазина?", "").toUpperCase();
}

start();

var mainList = {
	'budget': cost,
	'shopTitle': shopTitle,	
	'shopGoods': [],
	'employers': {},
	'open': true,
	'discount': false
}

function chooseGoods() {
	for (var i = 0; i < 3; i++) {
		var answer = prompt("Какой тип товаров будем продавать?", "");
		if ((typeof(answer)) === 'string' && answer.length < 50 && answer != '' && answer !== null) {
			console.log('все верно');
			mainList['shopGoods'][i] = answer;
		} else {
			console.log('ввод некорректный');
			i--;
		}
	}
}

chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log('не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать');
	} else if (time < 24) {
		console.log('Уже слишком поздно');
	} else {
		console.log('В сутках только 24 часа');
	}
}

workTime(18);

function getBudget() {
	alert( 'Бюджет за 1 день: ' + cost / 30 );
}

getBudget();

function getDiscount(discount) {
	price = prompt("Укажите цену", "");
	if(discount == true) {
		price = price / 100 * 80;
	}
	return price;
}

getDiscount(true);

console.log(price);

function getEmployers() {
	for(var j = 1; j <= 4; j++) {
		var name = prompt('Введите имя сотрудника', '');
		if((typeof(name)) == 'string' && (typeof(name)) !== null && name != "" && name.length < 20) {
			mainList['employers'][j] = j + '-' + name;
		} else {
			console.log('Неправильный ввод');
			j--;
		}

	}
}

getEmployers();

console.log(mainList);

