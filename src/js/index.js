import '../scss/style.scss';

import {
  toggleBurgerMenu,
  togglePageHeaderCallPopup,
  togglePageHeaderFeedbackPopup
} from '../blocks/page-header/js/page-header';
toggleBurgerMenu();
togglePageHeaderCallPopup();
togglePageHeaderFeedbackPopup();

import {
  toggleShowMore
} from '../blocks/brands/js/brands';
toggleShowMore();

import {
  closeSidebarPopup,
  switchActiveLink,
  toggleSidebarCallPopup,
  toggleSidebarFeedbackPopup
} from '../blocks/sidebar/js/sidebar';
closeSidebarPopup();
switchActiveLink();
toggleSidebarCallPopup();
toggleSidebarFeedbackPopup();

import {
  toggleRepairGadgetsReadMore
} from '../blocks/repair-gadgets/js/repair-gadgets';
toggleRepairGadgetsReadMore();

import {
  switchTabs,
  switchReadMore,
  toggleServicesCallPopup,
  toggleServicesFeedbackPopup
} from '../blocks/services/js/services';
switchTabs();
switchReadMore();
toggleServicesCallPopup();
toggleServicesFeedbackPopup();

import {brandsSwiper, repairGadgetsSwiper, pricesSwiperContainer} from '../blocks/swiper/swiper';

