var cost = prompt("Ваш бюджет на месяц?", "");
var answerTitle = prompt("Название вашего магазина?", "");

var mainList = {	
	'shopGoods': [],
	'employers': {}
}

mainList['budget'] = cost;
mainList['shopTitle'] = answerTitle;
mainList.open;

console.log(mainList);


var answer1 = prompt("Какой тип товаров будем продавать?", "");
var answer2 = prompt("Какой тип товаров будем продавать?", "");
var answer3 = prompt("Какой тип товаров будем продавать?", "");

mainList['shopGoods'][0] = answer1;
mainList['shopGoods'][1] = answer2;
mainList['shopGoods'][2] = answer3;

alert( 'Бюджет за 1 день: ' + 30 / cost );
