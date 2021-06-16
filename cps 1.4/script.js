let menuLinks = document.querySelectorAll('.sidebar__menu-item-link');

for (let i = 0; i < menuLinks.length; i++) {
	menuLinks[i].addEventListener('click', function () {
		for (let j = 0; j < menuLinks.length; j++) {
			menuLinks[j].classList.remove('sidebar__menu-item-link--active');
		}
		menuLinks[i].classList.add('sidebar__menu-item-link--active');
	});
}

let languageLinks = document.querySelectorAll('.sidebar__language-list-item-link');

for (let i = 0; i < languageLinks.length; i++) {
	languageLinks[i].addEventListener('click', function () {
		for (let j = 0; j < languageLinks.length; j++) {
			languageLinks[j].classList.remove('sidebar__language-list-item-link--active');
		}
		languageLinks[i].classList.add('sidebar__language-list-item-link--active');
	});
}