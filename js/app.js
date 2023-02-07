    // плавная прокрутка по якорям

const anchors = document.querySelectorAll('a[href*="-anchor"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
};


// Меню бургера
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    const iconMenuHidden = document.querySelector('.menu__icon--hover');
    iconMenu.addEventListener("click", function(e) {
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
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 3,
        },
    }
});

// анимация при скролле

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {

            change.target.classList.add('element-show');
        }
    })
}

let options = {
    threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');

    for (let elm of elements) {
        observer.observe(elm);
    }


        // Отправка формы в ТГ

const token = '6041505837:AAH7Wdw5t08SWcFVr59Qag68g5s9PLc_dIU';
const chatId = '-1001813669880';
const uriApi = `https://api.telegram.org/bot${ token }/sendMessage`;
const success = document.getElementById('success');

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта Айва</b>\n`;
    message += `<b>Отправитель: </b> ${ this.name.value}\n`;
    message += `<b>Телефон: </b> ${ this.tel.value}\n`;
    message += `<b>Почта: </b> ${ this.name.value}`;

    axios.post(uriApi, {
        chat_id: chatId,
        parse_mode: 'html',
        text: message

    })

    .then((res) => {
        this.name.value = '';
        this.email.value = '';
        this.tel.value = '';
        success.innerHTML = 'Заявка отправлена';
        success.style.display = 'flex';
    })

    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Конец');
    })
})
    
    // Модальные окна 

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", function(e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose (popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
        
    }
    
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';



    if (lockPadding.length > 0) {
        for (let i = 0; i <lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}


function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});






