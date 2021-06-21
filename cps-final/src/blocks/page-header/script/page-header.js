const toggleBurgerMenu = () => {
  let burgerButton = document.getElementById('burger-id');
  let burgerMenu = document.querySelector('.page-header-menu__burger-list');
  let burgerButtonIcon = document.querySelector('.page-header-menu__burger-ico');

  burgerButton.addEventListener('change', function () {
    burgerMenu.style.display = 'block';
    burgerButtonIcon.src = '../img/close.svg';
    if (!burgerButton.checked) {
      burgerMenu.style.display = 'none';
      burgerButtonIcon.src = '../img/burger.svg';
    }
  });
}

toggleBurgerMenu();

//export { toggleBurgerMenu }
