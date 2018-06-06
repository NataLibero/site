var menu = document.querySelector('.menu');
var items = document.querySelectorAll('.menu-item');
var title = document.getElementById('title');
var adv = document.querySelector('.adv');
var question = document.getElementById('prompt');


var li = document.createElement('li');
li.innerHTML = 'Пятый пункт';
li.classList.add('menu-item');
menu.appendChild(li);

menu.insertBefore(items[2], items[1]);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.innerHTML += 'подлинную';

adv.parentNode.removeChild(adv);


var userAnswer = prompt("Какое у Вас отношение к технике apple?", "");
question.innerHTML = userAnswer;




