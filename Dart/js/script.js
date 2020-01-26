'use strict';

let header = document.querySelector('.container:first-child'),
	footerHeader = document.querySelector('.footer-of-header');

window.addEventListener('scroll', function() {
	if (document.documentElement.scrollTop >= 65) {
		header.classList.add('white');
		footerHeader.style.paddingTop = '248px';
		footerHeader.style.marginTop = '0';

	} else {
		header.classList.remove('white');
		footerHeader.style.paddingTop = ''
		footerHeader.style.marginTop = '';
	}
})

let signUp = document.querySelector('.sign-up-btn'),
	blur = document.querySelector('#blur'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.close-btn');

signUp.addEventListener('click', function() {
	document.body.style.overflow = 'hidden';
	blur.classList.add('active');
	overlay.classList.add('active');
});

close.addEventListener('click', function() {
	document.body.style.overflow = '';
	blur.classList.remove('active');
	overlay.classList.remove('active');
});

let more = document.querySelectorAll('#services .part div:first-child span'),
	part = document.querySelectorAll('#services .part');

more.forEach(function(item, i) {
	item.addEventListener('click', function() {
		item.classList.toggle('active');
		part[i].classList.toggle('active');
	});
})

let nextTo = document.querySelectorAll('#testimonials .right span'),
	reviews = document.querySelector('#testimonials .right .reviews'),
	review = reviews.querySelectorAll('.review'),
	name = reviews.querySelectorAll('.review h3'),
	pos = 0;

function topSwitcher() {
	if (pos == 0) {
		pos = 0;
	} else {
		pos += 466;
	}

	reviews.style.transform = `translate( 0px, ${pos}px)`;
};

function bottomSwitcher() {
	if (pos == -((review.length - 1) * 233) + 233) {
		pos = -((review.length - 1) * 233) + 233;
	} else if (pos == -(review.length * 233) + 233) {
		pos = -(review.length * 233) + 233;
	} else {
		pos += -466;
	}

	reviews.style.transform = `translate( 0px, ${pos}px)`;
};

nextTo.forEach(function(item) {
	item.addEventListener('click', function() {
		if (pos == -((review.length - 1) * 233) + 233) {
			nextTo[1].style.opacity = 0;
		} else if (pos == -(review.length * 233) + 233) {
			nextTo[1].style.opacity = 0;
		} else {
			nextTo[1].style.opacity = 1;
		}

		if (pos == 0) {
			nextTo[0].style.opacity = 0;
		} else {
			nextTo[0].style.opacity = 1;
		}
	})
	
})

let discribe = document.querySelectorAll('.describes .title.about'),
	photo = document.querySelectorAll('#team .photos .photo');

photo.forEach(function(item, i) {
	item.addEventListener('click', function() {
		for (let n = 0; n < photo.length; n++) {
			photo[n].classList.remove('active');
			discribe[n].classList.remove('active');
		}

		photo[i].classList.add('active');
		discribe[i].classList.add('active');
	})
})