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
  toggleRepairGadgetsReadMore
} from '../blocks/repair-gadgets/js/repair-gadgets';
toggleRepairGadgetsReadMore();

import {
  switchTabs,
  switchReadMore
} from '../blocks/services/js/services';
switchTabs();
switchReadMore();

import {
  addPricesSwiper
} from '../blocks/prices/js/prices'
addPricesSwiper();
