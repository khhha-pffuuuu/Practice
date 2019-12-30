'use strict';
//Паралакс эффект
let riderParallax = document.querySelector('.rider-parallax'),
	iPadParallax = document.querySelector('.iPad-parallax');

window.addEventListener('scroll', function() {
	let pos = window.pageYOffset;

	riderParallax.style.backgroundPositionY = (pos * riderParallax.dataset.speedy) + 'px';
	iPadParallax.style.transform = 'translate('+ pos * iPadParallax.dataset.speedx+'px, 0px)';
});

//Появление абзаца
let title = document.querySelector('.ipad-img h3'),
	paragraph = document.querySelector('.ipad-img p');

window.addEventListener('scroll', function() {
	let pos = window.pageYOffset;

	if (pos >= 460) {
		title.style.opacity = '1';
		title.style.left = '0';

		paragraph.style.opacity = '1';
		paragraph.style.left = '0';
	} else {
		title.style.opacity = '0';
		title.style.left = '-50px';

		paragraph.style.opacity = '0';
		paragraph.style.left = '-50px';
	}
});

//Переключатели влево м вправо

let btns = document.querySelectorAll('.prev-next-btns'),
	items = document.querySelector('.latest-products .catalog .items ul'),
	item = document.querySelectorAll('.item');

let i = 0;

function leftSwitcher() {
	if (i == 0) {
		i = 0;
	} else {
		i += 320;
	}

	items.style.transition = 'transform .5s';
	items.style.transform = 'translate('+ i +'px, 0px)';
};

function rightSwitcher() {
	if (i == -1280) {
		i = -1280;
	} else {
		i += -320;
	}

	items.style.transition = 'transform .5s';
	items.style.transform = 'translate('+ i +'px, 0px)';
};