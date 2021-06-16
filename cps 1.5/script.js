let showMoreButton = document.querySelector('.brands__show-more');
let showMoreButtonLabel = document.querySelector('.brands__show-more-label');
let brandsContainer = document.querySelector('.brands__container');

showMoreButton.addEventListener('change', function () {

	brandsContainer.style.height = 'auto';
	showMoreButtonLabel.textContent = 'Скрыть';
	showMoreButtonLabel.classList.toggle('brands__show-more-label--closed');
	showMoreButtonLabel.classList.toggle('brands__show-more-label--opened');	
	if (!showMoreButton.checked) {
			brandsContainer.style = 'height: 200px';		
		showMoreButtonLabel.textContent = 'Показать все';		
	}
});

new Swiper ('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		bulletClass: 'swiper-pagination-bullet'
	},
	slidesPerView: 1.3,
	spaceBetween: 16,	 
});