const burgerButton = document.querySelector('[data-burger="button"]');
const navList = document.querySelector('[data-main-nav="list"]');
const logoButton = document.querySelector('[data-mobil-logo]');
const navigation = document.querySelector('[data-main-nav="navigation"]');

const initBurgerMenu = () => {
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('is-active');
    navList.classList.toggle('navigation--mobil-only');
    logoButton.classList.toggle('visually-hidden');
    navigation.classList.toggle('is-open');
  });
};

export {
  initBurgerMenu
};
