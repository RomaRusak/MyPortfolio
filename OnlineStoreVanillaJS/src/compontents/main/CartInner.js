import createElement from "../createElement";
import { cart } from "../cart/Cart";

class Cart {

    constructor() {
        this.elem = document.createElement('div');
        this.elem.classList.add('cart-page-wrapper');
        this.render = this.render.bind(this);
    }

    render() {
        this.elem.innerHTML = '';
        cart.cartStorage.forEach((product) => {
            if (product.counnter <= 0) return //мб убрать
            let cartPageProductWrapper = createElement('div', [['class', 'cart-page-product-wrapper']]);
            let cartPageProductName = createElement('h3', [['class', 'cart-page-product-name']], product.title);
            let cartPageProductImg = createElement('img', [['src', product.image], ['class', 'cart-page-product-img']]);
            let cartPageProductCounter = createElement('p', [['class', 'cart-page-product-counter']], `this product in cart: ${product.counnter}`);
            let cartPageProductSum = createElement('p', [['class', 'cart-page-product-sumCounter']], `this product price: ${product.sum.toFixed(2)}`);
            let cartPageProductPlus = createElement('button', [['class', 'cart-page-product-plus cpb']], '+');
            let cartPageProductMinus = createElement('button', [['class', 'cart-page-product-minus cpb']], '-');
            let cartPageButtonsWrapper = createElement('div', [['class', 'cart-page-buttons-wrapper']]);

            cartPageButtonsWrapper.append(cartPageProductPlus, cartPageProductMinus)
            cartPageProductWrapper.append(cartPageProductName, cartPageProductImg, cartPageProductCounter, cartPageProductSum, cartPageButtonsWrapper);
            this.elem.append(cartPageProductWrapper);

            cartPageProductPlus.addEventListener('click', () => {
                cart.addTocart(product);
                this.render();
            });
            cartPageProductMinus.addEventListener('click', () => {
                cart.removeFromCart(product);
                this.render()
            })
        })
        let totalInfoBlock = createElement('div', [['class', 'cart-page-product-totalInfoBlock']]);
        let totalCounter = createElement('p', [['class', 'cart-page-product-total-counter']],`there are: ${cart.totalCounter} products in cart`);
        let totalSumCounter = createElement('p', [['class', 'cart-page-rpoduct-sum-counter']], `cost of all products in cart: ${cart.totalSumCounter} $`)
        if (cart.totalCounter == 0) {
            totalCounter.innerText = 'your cart is empty'
            totalSumCounter.innerText = ''
        }
        if (cart.totalCounter >= 1) {
            let deleteAllbutton = createElement('button', [['class', 'cart-page-product-deleteAllbutton']], 'X')
            totalInfoBlock.append(totalCounter, totalSumCounter, deleteAllbutton);
            this.elem.append(totalInfoBlock);

            deleteAllbutton.addEventListener('click', () => {
                let modaleWrapper = createElement('div', [['class', 'modale-wrapper']]);
                let cartPageModaleContainer = createElement('div', [['class', 'cart-page-modale-wrapper']]);
                let cartPageModaleText = createElement('h3', [['class', 'cart-page-modale-title']], 'Do you want to clean all your cart?');
                let cartPageModaleButtonContainer = createElement('div', [['class', 'cart-page-modale-buttonsWrapper']])
                let cartPageModaleYes = createElement('button', [['class', 'cart-page-modale-buttonYes cart-page-modale-button']], 'YES')
                let cartPageModaleNo = createElement('button', [['class', 'cart-page-modale-buttonNo cart-page-modale-button']], 'NO');
                document.querySelector('body').classList.add('stopScroll');

                cartPageModaleButtonContainer.append(cartPageModaleYes, cartPageModaleNo)
                cartPageModaleContainer.append(cartPageModaleText, cartPageModaleButtonContainer);
                modaleWrapper.append(cartPageModaleContainer);
                document.querySelector('.main').append(modaleWrapper);
                document.querySelector('.cart-page-wrapper').classList.add('opacity');

                cartPageModaleYes.addEventListener('click', () => {
                    modaleWrapper.remove()
                    cart.cartStorage = [];
                    cart.totalCounter = 0;
                    cart.totalSumCounter = 0;
                    cart.cartTotalcounterText.innerHTML = `products in cart: ${cart.totalCounter}`
                    cart.cartTotalPrice.innerHTML = `cost products: ${cart.totalSumCounter} $`;
                    this.render();
                    document.querySelector('body').classList.remove('stopScroll');
                    document.querySelector('.cart-page-wrapper').classList.remove('opacity');
                    localStorage.removeItem('cartSave');
                })
                
                cartPageModaleNo.addEventListener('click', () => {
                    document.querySelector('body').classList.remove('stopScroll');
                    modaleWrapper.remove();
                    document.querySelector('.cart-page-wrapper').classList.remove('opacity');
                })
                
            })

            return
        }
        
        totalInfoBlock.append(totalCounter, totalSumCounter);
        this.elem.append(totalInfoBlock);
    }

    init() {
        return this.elem
    }
}


// export default new Cart().init();
// let cartPageRender = new Cart().render
// export {cartPageRender}

let cartPage = new Cart()
let cartPageInit = cartPage.init()
let cartPageRender = cartPage.render

export default cartPageInit
export {cartPageRender}




