$(document).ready(function(){
	var hdsl = new Swiper('.hdsl-container', {
		paginationClickable: true,
		preventClicks: false,
		freeMode: true,
		spaceBetween: 0,
		slidesPerView: 10,
		breakpoints: {
			768: {
				slidesPerView: 5
			},
			1200: {
				slidesPerView: 7
			}
		}
	});
	var galleryThumbs = new Swiper('.w-sltit', {
		slidesPerView: 6,
		loop: true,
		freeMode: true,
		autoplay: {
			delay: 6e3,
			disableOnInteraction: false,
		},
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.w-slmain', {
		loop: true,
		autoplay: {
			delay: 6e3,
			disableOnInteraction: false,
		},
		thumbs: {
			swiper: galleryThumbs,
		},
		navigation: {
			nextEl: '.w-slide-next',
			prevEl: '.w-slide-prev',
		},
		pagination: {
			el: '.slmain-pgnt',
			clickable: true,
		},

	});
	var banner = new Swiper('.w-banner', {
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.banner-pgnt',
			clickable: true,
		},
	});
	var listPro = new Swiper('.list-pro', {
		slidesPerView: 5,
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			}
		},
		navigation: {
			nextEl: '.pro-next',
			prevEl: '.pro-prev',
		},
	});
	var proSlider = new Swiper('.pro-slider', {
		loop: true,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.pro-next',
			prevEl: '.pro-prev',
		},
		pagination: {
			el: '.pro-sliderpgnt',
			clickable: true,
		}
	});
});
