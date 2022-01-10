const swiper = new Swiper('.swiper', {
	loop: true,
	autoplay: {
		delay: 3000,
	},
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});
