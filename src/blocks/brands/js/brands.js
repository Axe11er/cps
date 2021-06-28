let showMoreButton = document.querySelector('.brands__show-more');
let showMoreButtonLabel = document.querySelector('.brands__show-more-label');
let brandsContainer = document.querySelector('.brands__container');



const toggleShowMore = () => {
  showMoreButton.addEventListener('change', function () {
    brandsContainer.style.height = 'auto';
    showMoreButtonLabel.textContent = 'Скрыть';
    showMoreButtonLabel.classList.remove('brands__show-more-label--closed');
    showMoreButtonLabel.classList.add('brands__show-more-label--opened');
    if (!showMoreButton.checked) {
      showMoreButtonLabel.classList.add('brands__show-more-label--closed');
      showMoreButtonLabel.classList.remove('brands__show-more-label--opened');
      brandsContainer.style = 'height: 170px';
      showMoreButtonLabel.textContent = 'Показать все';
    }
  });
}

const addBrandsSwiper = () => {
  new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet'
    },
    slidesPerView: 1.3,
    spaceBetween: 16,
  });
}

toggleShowMore();

addBrandsSwiper();

export {
	toggleShowMore,
	addBrandsSwiper
 }
