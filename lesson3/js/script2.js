/*var str = "урок-3-был слишком легким";
var str2 = str.slice(0, 1).toUpperCase() + str.slice(1);
console.log(str2);


var arr = str2.split('-');
var arr2 = [];

for (var i = 0; i < arr.length; i++) {
	arr2[i] = arr[i];
}

var strn = arr2.join(' ');
console.log(strn);

var word = strn.slice(-6);
var wordArr = word.split('');
wordArr.splice(4, 2, "o", "o");
var wordStr = wordArr.join('');
console.log(wordStr);


var arrlast = [20, 33, 1, "Человек", 2, 3];
var sum = 0;
for (var j = 0; j < arrlast.length; j++) {
	if(isNaN(arrlast[j])) {
		continue;
	} else {
		sum += Math.pow(arrlast[j], 3);
	}	
}
console.log(Math.sqrt(sum));

function checkString(result) {
	if((typeof(result)) != 'string') {
		alert('это не строка')
	} else {
		result = result.replace(/^\s+|\s+$/g, "");
		if (result.length > 50) {
			result = result.slice(0, 50 - 3) + '...';    
			console.log(result);    
		}		
	}
}

checkString(' Текст внутри пробелов Текст внутри пробелов Текст внутри пробелов Текст внутри пробелов Текст внутри пробелов Текст внутри пробелов Текст внутри пробелов ');

*/


var str = 'я учу javascript!';
console.log(str.indexOf('учу'));