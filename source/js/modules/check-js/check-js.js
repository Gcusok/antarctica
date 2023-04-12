const navigation = document.querySelector('[data-main-nav="navigation"]');
const navigationList = navigation.querySelector('[data-main-nav="list"]');
const heroBackgroundImage = document.querySelector('[data-hero="background"]');
const imageMap = document.querySelector('[data-image="map"]');
const logo = document.querySelector('[data-logo]');
const burgerButton = document.querySelector('[data-burger="button"]');
const wrapperHeader = document.querySelector('[data-header="wrapper"]');

const initCheckJs = () => {
  navigation.classList.remove('main-nav--no-js');
  wrapperHeader.classList.remove('header__wrapper--no-js');
  navigationList.classList.remove('navigation--no-js');
  heroBackgroundImage.classList.remove('hero__background--no-js');
  logo.classList.remove('logo--no-js');
  imageMap.classList.add('visually-hidden');
  burgerButton.classList.remove('visually-hidden');
};

export {
  initCheckJs
};
