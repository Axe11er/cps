let feedbackCloseButton = document.querySelector('.feedback__close-button');
let feedbackPopupBackground = document.querySelector('.feedback__popup-background');
let feedbackContainer = document.querySelector('.feedback__container');

feedbackCloseButton.addEventListener('click', function () {
	feedbackContainer.style.display = 'none';
});

feedbackPopupBackground.addEventListener('click', function (evt) {
	evt.stopPropagation();
	feedbackContainer.style.display = 'none';
});
