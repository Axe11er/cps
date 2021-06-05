let menuLinks = document.querySelectorAll('.sidebar__menu-item-link');
let menuLink = document.querySelector('.sidebar__menu-item-link');

for (i = 0; i < menuLinks.length; i++) {
	menuLinks[i].addEventListener('mouseover', function() {
		menuLinks[i].classList.add('sidebar__menu-item-link--active');
	});
}