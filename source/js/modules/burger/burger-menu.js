const burgerButton = document.querySelector('[data-burger="button"]');
const navList = document.querySelector('[data-main-nav="list"]');
const logoButton = document.querySelector('[data-mobil-logo]');
const navigation = document.querySelector('[data-main-nav="navigation"]');
const body = document.body;

const closeMenu = () => {
  burgerButton.classList.remove('is-active');
  navList.classList.remove('navigation--mobil-only');
  logoButton.classList.remove('visually-hidden');
  navigation.classList.remove('main-nav--mobil-only');
  body.classList.remove('scroll-lock');
};

const initBurgerMenu = () => {
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('is-active');
    navList.classList.toggle('navigation--mobil-only');
    logoButton.classList.toggle('visually-hidden');
    navigation.classList.toggle('main-nav--mobil-only');
    body.classList.toggle('scroll-lock');
  });
  navigation.addEventListener('click', () => {
    closeMenu();
  });
};

export {
  initBurgerMenu,
  closeMenu
};
