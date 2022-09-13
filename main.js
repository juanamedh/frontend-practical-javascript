const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('nav img.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('li.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('aside.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleShoppingCartMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isShoppingMenuClosed = shoppingCartMenu.classList.contains('inactive') 

    if (!isShoppingMenuClosed) {
        shoppingCartMenu.classList.toggle('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    shoppingCartMenu.classList.toggle('inactive')
}