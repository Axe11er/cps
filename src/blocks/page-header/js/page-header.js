let burgerButton = document.querySelector('.page-header__menu-burger');
let sidebarContainer = document.querySelector('.sidebar__container');
let callContainer = document.querySelector('.call__container');
let feedbackContainer = document.querySelector('.feedback__container');
let pageHeaderCallIcon = document.querySelector('.page-header__call-icon');
let pageHeaderFeedbackIcon = document.querySelector('.page-header__chat-icon');
let feedbackPopup = document.querySelector('.feedback__popup-background');
let callPopup = document.querySelector('.call__popup-background');
let closeFeedbackIcon = document.querySelector('.feedback__close-button');
let closeCallIcon = document.querySelector('.call__close-button');

const toggleBurgerMenu = () => {

  burgerButton.addEventListener('click', function () {
    sidebarContainer.style.display = 'flex';
  });
}

toggleBurgerMenu();

const togglePageHeaderCallPopup = () => {
  pageHeaderCallIcon.addEventListener('click', function () {
    callContainer.style.display = 'flex';
    feedbackContainer.style.display = 'none';
  });
  callPopup.addEventListener('click', function () {
      callContainer.style.display = 'none';
  });
  closeCallIcon.addEventListener('click', function () {
    callContainer.style.display = 'none';
  });
}

togglePageHeaderCallPopup();

const togglePageHeaderFeedbackPopup = () => {
  pageHeaderFeedbackIcon.addEventListener('click', function () {
    feedbackContainer.style.display = 'flex';
    callContainer.style.display = 'none';
  });
  feedbackPopup.addEventListener('click', function () {
    feedbackContainer.style.display = 'none';
  });
  closeFeedbackIcon.addEventListener('click', function () {
    feedbackContainer.style.display = 'none';
  });
}

togglePageHeaderFeedbackPopup();

export {
  toggleBurgerMenu,
  togglePageHeaderCallPopup,
  togglePageHeaderFeedbackPopup
}
