'use strict';

const box = document.getElementById('box'),
			btns = document.getElementsByTagName('button'),
			circles = document.getElementsByClassName('circle'),
			heats = document.querySelectorAll('.heart'), // forEach
			// heats = wrapper.querySelectorAll('.heart'),
			oneHeart = document.querySelector('.heart'),
			wrapper = document.querySelector('.wrapper');

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px;';

btns[1].style.borderRadius = '25%';

//for(let i=0; i<heats.length; i++){
//	heats[i].style.backgroundColor = 'blue';
//};

heats.forEach(item => {
	item.style.backgroundColor = '#1122'; 
});

// Дообавить элемент через JS
const div = document.createElement('div');

div.classList.add('black'); //добавить класс к элементу
document.body.append(div);

wrapper.document.append(div); // добавить в начало
wrapper.document.prepend(div); // добавить в конец

// если вызываем один раз 
//document.querySelector('.wrapper').append(div);
// если элемент нужно получить мног раз нужно обьявить через переменную