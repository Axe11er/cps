let repairGadgetsReadMore = document.querySelector('.repair-gadgets__read-more');
let repairGadgetsReadMoreText = document.querySelector('.repair-gadgets__read-more-label');
let repairGadgetsContainer = document.querySelector('.repair-gadgets__container');

const toggleRepairGadgetsReadMore = () => {
	repairGadgetsReadMore.addEventListener('change', function () {
		repairGadgetsReadMoreText.classList.remove('repair-gadgets__read-more-label--closed');
		repairGadgetsReadMoreText.classList.add('repair-gadgets__read-more-label--opened');
		console.log(repairGadgetsReadMoreText.classList);
		repairGadgetsContainer.style.height = 'auto';
		repairGadgetsReadMoreText.textContent = 'Скрыть';
		if (!repairGadgetsReadMore.checked) {
			repairGadgetsReadMoreText.classList.add('repair-gadgets__read-more-label--closed');
		repairGadgetsReadMoreText.classList.remove('repair-gadgets__read-more-label--opened');
		  repairGadgetsContainer.style.height = '170px';
		  repairGadgetsReadMoreText.textContent = 'Показать все';
		}
	 });
}

toggleRepairGadgetsReadMore();


new Swiper('.repair-gadgets__swiper-container', {
  pagination: {
    el: '.repair-gadgets__swiper-pagination',
    clickable: true,
    bulletClass: 'repair-gadgets__swiper-pagination-bullet'
  },
  slidesPerView: 1.3,
  spaceBetween: 16,
});
