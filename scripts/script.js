document.addEventListener('DOMContentLoaded', () => {
	const shrinkBtn = document.getElementById('shrink-btn');
	const sliderContainer = document.querySelector('.slider');
	let slider;

	function mobileSlider() {
		if (window.innerWidth <= 767) {
			slider = new Swiper(document.querySelector('.slider'), {
				spaceBetween: 16,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1.2,
					},
					425: {
						slidesPerView: 1.5,
					},
					600: {
						slidesPerView: 2.2,
					},
				}
			});
		} else {
			if (slider !== undefined) {
				slider.destroy();
			}
		}
	}

	mobileSlider();

	window.addEventListener('resize', mobileSlider);

	shrinkBtn.addEventListener('click', () => {
		sliderContainer.classList.toggle('slider--minimized');
		if (shrinkBtn.querySelector('span').textContent === 'Показать всё') {
			shrinkBtn.querySelector('span').textContent = 'Скрыть';
			shrinkBtn.classList.add('brands__link--open');
		} else {
			shrinkBtn.querySelector('span').textContent = 'Показать всё';
			shrinkBtn.classList.remove('brands__link--open');
		}
	});
});