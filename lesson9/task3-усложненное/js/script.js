var btn = document.querySelector('.trigger');
var close = document.querySelector('.btn-close');
var item = document.querySelector('.modal-wrapper');

btn.addEventListener('click', function(){
	item.classList.add('open');
});

close.addEventListener('click', function(){
	item.classList.remove('open');
});