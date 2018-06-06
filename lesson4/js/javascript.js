var cost,
shopTitle,
price,
time;

function start() {
	do {
		cost = prompt("Ваш бюджет на месяц?", "");
	} while(isNaN(cost) || cost == null || cost == "");

	shopTitle = prompt("Название вашего магазина?", "").toUpperCase();
	time = 18;
}

//start();

var mainList = {
	budget: cost,
	shopTitle: shopTitle,	
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {
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
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('не может быть');
		} else if (time > 8 && time < 20) {
			console.log('Время работать');
			mainList.open = true;
		} else if (time < 24) {
			console.log('Уже слишком поздно');
		} else {
			console.log('В сутках только 24 часа');
		}
	},
	getBudget: function getBudget() {
		alert( 'Бюджет за 1 день: ' + cost / 30 );
	},
	getDiscount: function getDiscount() {
		price = prompt("Укажите цену", "");
		if(mainList.discount == true) {
			price = (price / 100) * 80;
		}
	},
	getEmployers: function getEmployers() {
		for(var j = 1; j <= 4; j++) {
			var name = prompt('Введите имя сотрудника', '');
			if((typeof(name)) == 'string' && (typeof(name)) !== null && name != "" && name.length < 20) {
				name = name[0].toUpperCase() + name.substr(1).toLowerCase();
				mainList['employers'][j] = j + '-' + name;
			} else {
				console.log('Неправильный ввод');
				j--;
			}
		}
	},
	chooseShopItems: function chooseShopItems() {
		
		do {
			var items = prompt("Перечислите через запятую товары", "");
		} while (((typeof(items)) !== "string" || items == null || items == ""));

		mainList.shopItems = items.split(",");
		for(var i = 0; i < mainList.shopItems.length; i++) {
			mainList.shopItems[i] = mainList.shopItems[i].trim();
		}
		//mainList.shopItems.push(prompt("Подождите, еще один товар", ""));
		mainList.shopItems.sort();	
		
	}
}

//mainList.chooseShopItems();

document.write("У нас вы можете купить: ");

mainList.shopItems.forEach(function(item, i){
	i++;
	document.write('<br>' + i + ": " + item);
})

console.log("Наш магазин включает в себя: ");
for(key in mainList) {
	console.log(key + ": " + mainList[key])
}



console.log(mainList);

