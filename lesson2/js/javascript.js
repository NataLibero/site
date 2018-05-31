var cost = prompt("Ваш бюджет на месяц?", "");
var shopTitle = prompt("Название вашего магазина?", "");

var mainList = {
	'budget': cost,
	'shopTitle': shopTitle,	
	'shopGoods': [],
	'employers': {},
	'open': true
}

for (var i = 0; i < 3; i++) {
	var answer = prompt("Какой тип товаров будем продавать?", "");
	if ((typeof(answer)) === 'string' && answer.length < 50 && answer != '' && answer !== null) {
		console.log('все верно');
		mainList['shopGoods'][i] = answer;
	} else {
		console.log('ввод некорректный');
	}
}

/*var i = 0;
while(i < 3) {
	var answer = prompt("Какой тип товаров будем продавать?", "");
	if ((typeof(answer)) === 'string' && answer.length < 50 && answer != '' && answer !== null) {
		console.log('все верно');
		mainList['shopGoods'][i] = answer;
	} else {
		console.log('ввод некорректный');
	}
	i++;
}*/

/*
var i = 0;
do{
	var answer = prompt("Какой тип товаров будем продавать?", "");
	if ((typeof(answer)) === 'string' && answer.length < 50 && answer != '' && answer !== null) {
		console.log('все верно');
		mainList['shopGoods'][i] = answer;
	} else {
		console.log('ввод некорректный');
	}
	i++;
}
while(i < 3);
*/

console.log(mainList);

