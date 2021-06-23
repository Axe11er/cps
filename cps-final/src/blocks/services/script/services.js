let readMore = document.getElementById('read-more-id');
let readMoreText = document.querySelector('.content__read-more-text')
let mainContentText = document.querySelector('.main__content-text');


let mainTabs = document.querySelectorAll('.main__tab');
let mainContentTextAll = document.querySelectorAll('.main__content-text');


readMore.addEventListener('change', function () {
  for (let i = 0; i < mainTabs.length; i++) {
    mainContentTextAll[i].style.height = 'auto';
	 readMoreText.textContent = 'Скрыть';
    if (!readMore.checked) {
      readMoreText.textContent = 'Читать далее'
      mainContentTextAll[i].style.height = '105px';
    }
  }
  readMoreText.classList.toggle('content__read-more-text--closed');
  readMoreText.classList.toggle('content__read-more-text--opened');
});

for (let i = 0; i < mainTabs.length; i++) {
  mainTabs[i].addEventListener('change', function () {
    for (let j = 0; j < mainTabs.length; j++) {
      mainContentTextAll[j].style.display = 'none';
    }
    mainContentTextAll[i].style.display = 'block';
  });
}
