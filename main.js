const menuEmail = document.querySelector('.navbar-email');
const hamburgerMenu = document.querySelector('nav img.menu');
const productDetailClose = document.querySelector(' .product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('li.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('aside.shopping-cartContainer');
const goBackFromCart = document.querySelector('.title-container img')
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('aside.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleShoppingCartMenu);
productDetailClose.addEventListener('click', closeProductDetail);
goBackFromCart.addEventListener('click', toggleShoppingCartMenu);

function toggleDesktopMenu() {
    const isShoppingMenuClosed = shoppingCartMenu.classList.contains('inactive') 

    if (!isShoppingMenuClosed) {
        shoppingCartMenu.classList.toggle('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isShoppingMenuClosed = shoppingCartMenu.classList.contains('inactive') 
    closeProductDetail();

    if (!isShoppingMenuClosed) {
        shoppingCartMenu.classList.toggle('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    };

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    };

    shoppingCartMenu.classList.toggle('inactive')
}

function openProductDetail() {
    const isShoppingCartClosed = shoppingCartMenu.classList.contains('inactive');
    if (!isShoppingCartClosed) {
        shoppingCartMenu.classList.add('inactive');
    };

    productDetailContainer.classList.remove('inactive');
};

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
};


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

/* <div class="product-card">

<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */

function renderProductCards(arr) {
    for(product of arr) {
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, image} -> product.image 
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    
    };
};

renderProductCards(productList);

