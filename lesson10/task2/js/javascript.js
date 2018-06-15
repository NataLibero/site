window.addEventListener('DOMContentLoaded', function(){


class Options {
	constructor(height, width, bg, color, textAlign, fontSize) {	
		
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.color = color;
		this.textAlign = textAlign;
		this.fontSize = fontSize;
		
	}

	createDiv(){
		var div = document.createElement('div');
		div.style.height = this.height + 'px';
		div.style.width = this.width + 'px';
		div.style.background = this.bg;
		div.style.color = this.color;
		div.style.textAlign = this.textAlign;
		div.style.fontSize = this.fontSize + 'px';
		div.innerHTML = 'Hallo World';
		div.style.lineHeight = '100px'
		document.body.appendChild(div);
	}
	
}

var elem = new Options(100, 200, 'blue', 'white', 'center', 30);
console.log(elem);
elem.createDiv();


})