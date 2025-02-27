function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.mobile-menu-icon span');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.textContent = "menu";
    } else {
        menuMobile.classList.add('open');
        icon.textContent = "close";
    }
}