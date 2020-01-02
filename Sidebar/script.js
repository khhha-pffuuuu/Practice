'use strict';

let burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
	burger.classList.toggle('arrow');
})

let section = document.querySelectorAll('section')[0],
	addButton = document.querySelector('.add-btn');

let newSection = [], i = 0;

addButton.addEventListener('click', function() {
	i++;

	newSection[i] = document.createElement('section');

	newSection[i].innerHTML = section.innerHTML;

	document.body.insertBefore(newSection[i], addButton);
})