let parallax = document.querySelectorAll('.parallax');

window.addEventListener('scroll', function() {
	parallax.forEach(function(item) {
		let posY = window.pageYOffset;
		item.style.backgroundPositionY = posY * item.dataset.speed + 'px';
	})
})