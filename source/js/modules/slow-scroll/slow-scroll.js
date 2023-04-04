const navigationButtons = document.querySelectorAll('[data-nav-button]');
const advantagesSection = document.querySelector('[data-section="advantages"]');
const bookingSection = document.querySelector('[data-section="booking"]');
const contactsSection = document.querySelector('[data-section="contacts"]');
const modal = document.querySelector('[data-modal="feedback"]');
const body  = document.body;

const initSlowScroll = () => {

    navigationButtons.forEach((button) => {
        button.addEventListener('click', (evt) => {
            evt.preventDefault();
            let section;
            if (modal.classList.contains('is-active')) {
                modal.classList.remove('is-active');
                body.classList.remove('scroll-lock');
            }
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
        })
    });
};

export {
    initSlowScroll
};