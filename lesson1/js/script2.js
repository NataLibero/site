var num = 33721;
var arr = num.toString();
var arr2 = arr.split('');

var result = arr2[0] * arr2[1] * arr2[2] * arr2[3] * arr[4];
console.log(result);

var deg = Math.pow(result, 3);
var deg2 = deg.toString();
document.write(deg2.substr(0, 2));