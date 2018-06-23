function sayName(name) {
	let message = "My name ia" + name
	return message
}

let arr = [5, -3,6,-5,0,-7,8];
let result = arr.reduce(function(sum,elem) {
	return sum + elem;
})

let assert = require('chai').assert

describe("sayName", function() {

	it("Получаем фразу с новым именем", function(){
		assert.typeOf(sayName("Alex"), "number")
	})
});

discribe("arr", function(){
	it("Получаем сумму массива", function(){
		assert.equal(result, 13)
	})
})


/*<script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/libs/jquery-1.5.1.min.js">\x3C/script>')</script> */