let callCloseButton = document.querySelector('.call__close-button');
let callPopupBackground = document.querySelector('.call__popup-background');
let callContainer = document.querySelector('.call__container');

const closeCallPopup = () => {
  callCloseButton.addEventListener('click', function () {
    callContainer.style.display = 'none';
  });

  callPopupBackground.addEventListener('click', function () {	  
    callContainer.style.display = 'none';
  });
}

closeCallPopup();

export {
  closeCallPopup
}
