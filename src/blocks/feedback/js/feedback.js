let feedbackCloseButton = document.querySelector('.feedback__close-button');
let feedbackPopupBackground = document.querySelector('.feedback__popup-background');
let feedbackContainer = document.querySelector('.feedback__container');

const closeFeedbackPopup = () => {
  feedbackCloseButton.addEventListener('click', function () {
    feedbackContainer.style.display = 'none';
  });
  feedbackPopupBackground.addEventListener('click', function () {
    feedbackContainer.style.display = 'none';
  });
}

closeFeedbackPopup();

export {
  closeFeedbackPopup
}
