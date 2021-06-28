let readMore = document.getElementById('read-more-id');
let readMoreText = document.querySelector('.services__read-more-text');
let servicesTabs = document.querySelectorAll('.services__tab');
let servicesContentTextAll = document.querySelectorAll('.services__content-text');
let servicesRepairIcon = document.querySelector('.services__repair-icon');
let servicesCheckStatusIcon = document.querySelector('.services__check-status-icon');
let callContainer = document.querySelector('.call__container');
let feedbackContainer = document.querySelector('.feedback__container');
let feedbackPopup = document.querySelector('.feedback__popup-background');
let callPopup = document.querySelector('.call__popup-background');
let closeFeedbackIcon = document.querySelector('.feedback__close-button');
let closeCallIcon = document.querySelector('.call__close-button');

const toggleServicesCallPopup = () => {	
	servicesRepairIcon.addEventListener('click', function () {
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

const toggleServicesFeedbackPopup = () => {
	servicesCheckStatusIcon.addEventListener('click', function () {
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
toggleServicesFeedbackPopup();
toggleServicesCallPopup();

export {
  switchTabs,
  switchReadMore,
  toggleServicesCallPopup,
  toggleServicesFeedbackPopup
}
