let brandsSwiper = new Swiper('.brands__swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet'
  },
  slidesPerView: 1.3,
  spaceBetween: 16,
});

let repairGadgetsSwiper = new Swiper('.repair-gadgets__swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet'
  },
  slidesPerView: 1.3,
  spaceBetween: 16,
});

let pricesSwiperContainer = new Swiper('.prices__swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet'
  },
  slidesPerView: 1.3,
  spaceBetween: 16,
});

export {
  brandsSwiper,
  repairGadgetsSwiper,
  pricesSwiperContainer
}
