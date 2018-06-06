var open_btn = document.getElementById('open-btn');

// поля в левом меню через классы

var name = document.getElementsByClassName('name');
var name_value = document.getElementsByClassName('name-value');
var budget = document.getElementsByClassName('budget');
var budget_value = document.getElementsByClassName('budget-value');
var goods = document.getElementsByClassName('goods');
var goods_value = document.getElementsByClassName('goods-value');
var items = document.getElementsByClassName('items');
var items_value = document.getElementsByClassName('items-value');
var employers = document.getElementsByClassName('employers');
var employers_value = document.getElementsByClassName('employers-value');
var discount = document.getElementsByClassName('discount');
var discount_value = document.getElementsByClassName('discount-value');
var isopen = document.getElementsByClassName('isopen');
var isopen_value = document.getElementsByClassName('isopen-value');

// категории товаров через класс

var goods_item = document.getElementsByClassName('goods-item');

// Получить все 3 кнопки через Tag 

var buttons = document.getElementsByTagName('button');

// Получить поля ввода товаров, времени и расчета бюджета через querySelector

var choose_item = document.querySelector('.choose-item');
var time_value = document.querySelector('.time-value');
var count_budget_value = document.querySelector('.count-budget-value');


// Получить поля имен сотрудников через querySelectorAll

var employers = document.querySelectorAll('.hire-employers-item');