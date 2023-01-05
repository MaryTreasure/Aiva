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