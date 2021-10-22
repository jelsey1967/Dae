const swiper = new Swiper('.slider-bottle', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 80,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const swiperFollow = new Swiper('.slider-follow', {
	slidesPerView: 'auto',
	loopedSlides: true,
	spaceBetween: 9,
});