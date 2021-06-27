let menuLinks = document.querySelectorAll('.sidebar__menu-item-link');
let sidebarCloseIcon = document.querySelector('.sidebar__close-icon');
let sidebarContainer = document.querySelector('.sidebar__container');
let sidebarPopupBackground = document.querySelector('.sidebar__popup-background');
let languageLinks = document.querySelectorAll('.sidebar__language-list-item-link');

const switchActiveLink = () => {
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
      for (let j = 0; j < menuLinks.length; j++) {
        menuLinks[j].classList.remove('sidebar__menu-item-link--active');
      }
      menuLinks[i].classList.add('sidebar__menu-item-link--active');
    });
  }

  for (let i = 0; i < languageLinks.length; i++) {
    languageLinks[i].addEventListener('click', function () {
      for (let j = 0; j < languageLinks.length; j++) {
        languageLinks[j].classList.remove('sidebar__language-list-item-link--active');
      }
      languageLinks[i].classList.add('sidebar__language-list-item-link--active');
    });
  }
}

const closeSidebarPopup = () => {
  sidebarCloseIcon.addEventListener('click', function () {
    sidebarContainer.style.display = 'none';
  });

  sidebarPopupBackground.addEventListener('click', function () {
    sidebarContainer.style.display = 'none';
  });
}

switchActiveLink();
closeSidebarPopup();

let callContainer = document.querySelector('.call__container');
let feedbackContainer = document.querySelector('.feedback__container');
let sidebarCallIcon = document.querySelector('.sidebar__call-icon');
let sidebarFeedbackIcon = document.querySelector('.sidebar__chat-icon');
let feedbackPopup = document.querySelector('.feedback__popup-background');
let callPopup = document.querySelector('.call__popup-background');
let closeFeedbackIcon = document.querySelector('.feedback__close-button');
let closeCallIcon = document.querySelector('.call__close-button');

const toggleSidebarCallPopup = () => {
  sidebarCallIcon.addEventListener('click', function () {
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

toggleSidebarCallPopup();

const toggleSidebarFeedbackPopup = () => {
  sidebarFeedbackIcon.addEventListener('click', function () {
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

toggleSidebarFeedbackPopup();

export {
  switchActiveLink,
  closeSidebarPopup,
  toggleSidebarCallPopup,
  toggleSidebarFeedbackPopup
}
