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
    const isShoppingMenuClosed = shoppingCartMenu.classList.contains('inactive') 

    if (!isShoppingMenuClosed) {
        shoppingCartMenu.classList.toggle('inactive')
    }
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

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'LCD TV',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

