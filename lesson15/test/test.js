//1)
function sum(a, b) {
	return a + b > 10;
}
sum(2, 2);

//2)
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

//3)

var each = function(startArr, f){
	return f(startArr);
};
var arr2 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	};
	return newArr;
};
console.log(each(arr2, myFunc));


let assert = require('chai').assert
let expect = require('chai').expect

describe("sum", function() {
	it("Вернуть тип данных", function() {
		assert.isFalse(sum())
	})
})

describe('num', function() {
	it("соответствие переменной num", function() {
		assert.equal(num, 5);
	})
})

describe('Функция each', function() {
	it("Проверить на тип данных", function() {
		assert.typeOf(each(arr2, myFunc), 'array');
	})
})

describe('Функция each', function() {
	it("Проверить на свойство length arr", function() {
		assert.equal(arr2.length, 5);
	})
})

describe('Функция each', function() {	
	it("Проверить на свойство length func", function() {
		assert.equal(each.length, 2);
	})
})

describe('Функция each', function() {
	it("Проверить на соответствие ожидаемому результату", function() {		
		expect([8, 7, 6, 5, 4]).to.eql(each(arr2, myFunc));
	})
})