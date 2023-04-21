const navToggle = document.querySelector('.header__navigation-toggle');
const navMenu = document.querySelector('.header__navigation-list');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('close');
});
