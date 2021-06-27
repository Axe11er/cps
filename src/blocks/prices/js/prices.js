const addPricesSwiper = () => {
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

addPricesSwiper();

export {
  addPricesSwiper
}
