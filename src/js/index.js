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
  toggleShowMore,
  addBrandsSwiper
} from '../blocks/brands/js/brands';
toggleShowMore();
addBrandsSwiper();

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
  toggleRepairGadgetsReadMore,
  addRepairGadgetSwiper
} from '../blocks/repair-gadgets/js/repair-gadgets';
toggleRepairGadgetsReadMore();
//addRepairGadgetSwiper();

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

import {
  addPricesSwiper
} from '../blocks/prices/js/prices'
//addPricesSwiper();
