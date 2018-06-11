window.addEventListener('DOMContentLoaded', function(){
	setInterval(timer);
});	

function timer(){
	var hours = document.getElementById('hours');
	var hour = new Date();
	hours.innerHTML = addZero(hour.getHours())+':'+addZero(hour.getMinutes())+':'+addZero(hour.getSeconds());
}
function addZero(num){
	if(num <=9) {
		return '0' + num;
	} else {
		return num;
	}
	

}