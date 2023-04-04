const navigationButtons = document.querySelectorAll('[data-nav-button]');
const advantagesSection = document.querySelector('[data-section="advantages"]');
const bookingSection = document.querySelector('[data-section="booking"]');
const contactsSection = document.querySelector('[data-section="contacts"]');

const initSlowScroll = () => {

  navigationButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      let section;
      switch (evt.target.textContent) {
        case 'Преимущества':
          section = advantagesSection;
          break;

        case 'Ближайшие круизы':
          section = bookingSection;
          break;

        case 'Контакты':
          section = contactsSection;
          break;
      }
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};

export {
  initSlowScroll
};
