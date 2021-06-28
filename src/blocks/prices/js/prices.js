const addPricesSwiper = () => {
  new Swiper('.prices__swiper-container', {
    pagination: {
      el: '.prices__swiper-pagination',
      clickable: true,
      bulletClass: 'prices__swiper-pagination-bullet'
    },
    slidesPerView: 1.3,
    spaceBetween: 16,
  });
}

addPricesSwiper();

export {
  addPricesSwiper
}
