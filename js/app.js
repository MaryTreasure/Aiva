// Меню бургера
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    const iconMenuHidden = document.querySelector('.menu__icon--hover');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        if (iconMenuHidden.classList.contains('menu__icon--hover')) {
            iconMenuHidden.classList.remove('menu__icon--hover');
        } else {
            iconMenuHidden.classList.add('menu__icon--hover');
        }
    });
}

// Спойлер

document.addEventListener('DOMContentLoaded', () => {
    const spoilers = document.querySelectorAll('.spoilers__item');

    spoilers.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.spoilers__control');
            const content = self.querySelector('.spoilers__content');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });
});

// Слайдер Swiper

new Swiper('.image-slider',{


    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    slidesPerView: 3,
    spaceBetween: 75,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    }
});