let readMore = document.getElementById('read-more-id');
let readMoreText = document.querySelector('.services__read-more-text');
let servicesTabs = document.querySelectorAll('.services__tab');
let servicesContentTextAll = document.querySelectorAll('.services__content-text');

const switchTabs = () => {
  for (let i = 0; i < servicesTabs.length; i++) {
    servicesTabs[i].addEventListener('click', function () {		 
      for (let j = 0; j < servicesTabs.length; j++) {
        servicesContentTextAll[j].style.display = 'none';
      }
      servicesContentTextAll[i].style.display = 'block';
    });
  }
}

const switchReadMore = () => {
  readMore.addEventListener('change', function () {
    for (let i = 0; i < servicesTabs.length; i++) {
		readMoreText.classList.remove('services__read-more-text--closed');
		readMoreText.classList.add('services__read-more-text--opened');
      servicesContentTextAll[i].style.height = 'auto';
      readMoreText.textContent = 'Скрыть';
      if (!readMore.checked) {
        readMoreText.classList.add('services__read-more-text--closed');
        readMoreText.classList.remove('services__read-more-text--opened');
        readMoreText.textContent = 'Читать далее'
        servicesContentTextAll[i].style.height = '105px';
      }
    }
  });
}

switchTabs();
switchReadMore();

export {
  switchTabs,
  switchReadMore
}
