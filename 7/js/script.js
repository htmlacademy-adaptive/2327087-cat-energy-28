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
