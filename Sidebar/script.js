'use strict';

let burger = document.querySelector('.burger'),
	navBar = document.querySelector('header nav');

if (window.innerWidth <= 500) {
	navBar.style.width = window.innerWidth + 'px';
}

burger.addEventListener('click', function () {
	burger.classList.toggle('arrow');
})

window.addEventListener('resize', function() {
	if (window.innerWidth > 500) {
		burger.classList.remove('arrow');
		navBar.style.width = '308px';
	} else {
		navBar.style.width = window.innerWidth + 'px';
	}
})