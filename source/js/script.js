const navToggle = document.querySelector(".header__navigation-toggle");
const navMenu = document.querySelector(".header__navigation-menu");

navMenu.classList.remove("header__navigation-menu--nojs")

navToggle.addEventListener("click", () => {
  if (navMenu.classList.contains("header__navigation-menu--inactive")) {
    navMenu.classList.remove("header__navigation-menu--inactive");
    navMenu.classList.add("header__navigation-menu--active");
  } else {
    navMenu.classList.add("header__navigation-menu--inactive");
    navMenu.classList.remove("header__navigation-menu--active");
  }
});

document.querySelectorAll('.form').forEach((form) => {
  form.querySelector('[type="submit"]').addEventListener('click', () => {
    form.querySelectorAll('.input').forEach((input) => {
      console.log(input);
      input.classList.add('input--validable')
    });
  }, { once: true });
});

document.querySelectorAll('.form').forEach((form) => {
  form.querySelector('[type="submit"]').addEventListener('click', () => {
    form.querySelectorAll('.input').forEach((input) => {
      console.log(input);
      input.classList.add('input--validable')
    });
  }, { once: true });
});
