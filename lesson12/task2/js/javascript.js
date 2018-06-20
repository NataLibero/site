window.addEventListener('DOMContentLoaded', function(){


class Options {
	constructor(height, width, bg, color, textAlign, fontSize) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.color = color;
		this.textAlign = textAlign;
		this.fontSize = fontSize
	}
	
	createDiv(text) {
		var div = document.createElement('div');
		div.textContent = text;
		div.style.cssText = `height: ${this.height};
							 width: ${this.width};
							 background-color: ${this.bg};
							 color: ${this.color};
							 text-align: ${this.textAlign};
							 font-size: ${this.fontSize}`

		document.body.appendChild(div);
	}
	
}

var elem = new Options('100px', '200px', 'blue', 'white', 'center', '30px');
elem.createDiv('Hello World!');
console.log(elem.fontSize);

})