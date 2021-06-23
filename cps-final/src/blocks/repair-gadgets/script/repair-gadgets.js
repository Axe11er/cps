let repairGadgetsReadMore = document.querySelector('.repair-gadgets__read-more');
let repairGadgetsReadMoreText = document.querySelector('.repair-gadgets__read-more-label');
let repairGadgetsContainer = document.querySelector('.repair-gadgets__container');

repairGadgetsReadMore.addEventListener('change', function () {
  repairGadgetsReadMoreText.classList.toggle('repair-gadgets__read-more-label--closed');
  repairGadgetsReadMoreText.classList.toggle('repair-gadgets__read-more-label--opened');
  console.log(repairGadgetsReadMoreText.classList);
  repairGadgetsContainer.style.height = 'auto';
  repairGadgetsReadMoreText.textContent = 'Скрыть';
  if (!repairGadgetsReadMore.checked) {
    repairGadgetsContainer.style.height = '170px';
    repairGadgetsReadMoreText.textContent = 'Показать все';
  }
});

new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet'
  },
  slidesPerView: 1.3,
  spaceBetween: 16,
});
