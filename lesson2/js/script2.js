var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (var i = 0; i < week.length; i++) {
	if (i == 3) {
		document.write('<i>' + week[i] + '</i></br>');
	} else if(i == 5 || i == 6) {
		document.write('<b>' + week[i] + '</b></br>');
	} else {
		document.write(week[i] + '</br>');
	}

}

var arr = ['123', '234', '345', '456', '789', '398', '987'];
for(var j = 0; j < arr.length; j++){
	if(arr[j][0] == '3' || arr[j][0] == '7') {
		console.log(arr[j]);
	}
}

/*
let x = 5;
alert(x++);    //5

[] + false - null + true;   // NaN


let y = 1; 
let x = y = 2;
alert(x);                 // 2

 
var sum = [] + 1 + 2;
console.log(sum);        // 12 *


alert('1'[0]);      // 1 *

(2 && 1 && null && 0 && undedined) //null
	
!!(a && b) (a && b)  // нет разницы

alert(null || 2 && 3 || 4);  //3

a = [1, 2, 3]; b = [1, 2, 3]; // a не равен b *

alert(+"Infinity");   // infinity *

'ежик' > 'яблоко'  //  false

(0 || "" || 2 || undefined || true || false); //2
*/

