'use strict';
//Паралакс эффект
let riderParallax = document.querySelector('.rider-parallax'),
	iPadParallax = document.querySelector('.iPad-parallax');

window.addEventListener('scroll', function() {
	let pos = window.pageYOffset;

	riderParallax.style.backgroundPositionY = -pos * 0.3 + 'px';
	iPadParallax.style.transform = 'translate('+ pos * 0.15 +'px, 0px)';
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
	catalog = document.querySelector('.latest-products .catalog .items ul'),
	items = document.querySelectorAll('.latest-products .catalog .items ul li');

let i = 0;

btns[0].style.opacity = '0';

function leftSwitcher() {
	if (i == 0) {
		i = 0;
	} else {
		i += 320;
	}

	catalog.style.transition = 'transform .5s';
	catalog.style.transform = 'translate('+ i +'px, 0px)';
};

function rightSwitcher() {
	if (i == -(items.length * 320) + (320 * 3)) {
		i = -(items.length * 320) + (320 * 3);
	} else {
		i += -320;
	}

	catalog.style.transition = 'transform .5s';
	catalog.style.transform = 'translate('+ i +'px, 0px)';
};

btns.forEach(function(item) {
	item.addEventListener('click', function() {
		if (i == 0) {
			btns[0].style.opacity = '0';
		} else if (i == -(items.length * 320) + (320 * 3)) {
			btns[1].style.opacity = '0';
		} else {
			btns[1].style.opacity = '1';
			btns[0].style.opacity = '1';
		}
	});
});

// Таб 
let tabButtons = document.querySelectorAll('.tab-section ul li a'),
	active = document.querySelectorAll('.tab-section ul li'),
	tabContent = document.querySelectorAll('.tab-content');

function hideTabContent(a) {
	for (let i = a; i < tabContent.length; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');

		active[i].classList.remove('active');
	}
}

hideTabContent(1);

function showTabContent(b) {
	if (tabContent[b].classList.contains('hide')) {
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');

		active[b].classList.add('active');
	}
}

tabButtons.forEach(function (item) {
	item.addEventListener('click', function(event) {
		for (let i = 0; i < tabButtons.length; i++) {
			if (event.target == tabButtons[i]) {
				hideTabContent(0);
				showTabContent(i);
				break;
			}
		}
	});
});