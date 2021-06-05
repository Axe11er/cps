let menuLinks = document.querySelectorAll('.sidebar__menu-item-link');
let menuLink = document.querySelector('.sidebar__menu-item-link');

for (let i = 0; i < menuLinks.length; i++) {
	
	menuLinks[i].addEventListener('click', function () {
		for (let j = 0; j < menuLinks.length; j++) {
			menuLinks[j].classList.remove('sidebar__menu-item-link--active');
		}
		menuLinks[i].classList.add('sidebar__menu-item-link--active');
	});
}