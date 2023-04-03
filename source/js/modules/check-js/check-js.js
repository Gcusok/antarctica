const navigation = document.querySelector('[data-main-nav="navigation"]');
const navigationList = navigation.querySelector('[data-main-nav="list"]');
const heroBackgroundImage = document.querySelector('[data-hero="background"]');
const imageMap = document.querySelector('[data-image="map"]');
const burger_button = document.querySelector('[data-open-modal="feedback"]');

const initCheckJs = () => {
    navigation.classList.remove('main-nav--no-js');
    navigationList.classList.remove('main-nav__list--no-js');
    heroBackgroundImage.classList.remove('hero__background--no-js');
    burger_button.classList.remove('visually-hidden');
    imageMap.classList.add('visually-hidden');
}

export {
    initCheckJs
};