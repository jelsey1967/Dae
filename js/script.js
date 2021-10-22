const swiper = new Swiper('.slider-bottle', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 80,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		500: {
			loop: true,
			slidesPerView: 2,
		},
		768: {
			loop: true,
			slidesPerView: 3,
		},
	},
});

const swiperFollow = new Swiper('.slider-follow', {
	slidesPerView: 'auto',
	loopedSlides: true,
	spaceBetween: 9,
});