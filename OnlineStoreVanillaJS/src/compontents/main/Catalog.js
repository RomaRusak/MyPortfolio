import ApiGetDate from "../Api";
import createElement from "../createElement";
import { addToCart } from "../cart/Cart";

class Catalog {

    constructor() {
        this.elem = document.createElement('div');
        this.elem.classList.add('catalog-wrapper');
        this.data = null;
        this.render();
    }

    async render() {
        let resp = await new ApiGetDate().getDateAllProducts();
        this.data = await resp.json();

        this.data.forEach(product => {
            let productWrapper = createElement('a', [['class', 'products-wrapper'], ['href', `#Catalog/${product.id}`], ['data-id', product.id]]);

            let productTitle = createElement('h3', [['class', 'product-title']],product.title);

            let productImage = createElement('img', [['src', product.image], ['class', 'product-img']]);

            // let productDescription = createElement('p', [['class', 'product-description']], product.description)

            let productAddWrapper = createElement('div', [['class', 'product-addToCart-wrapper']]);
            let productAddButton = createElement('button', [['class', 'product-addToCart-button']], 'Add to cart');
            productAddWrapper.append(productAddButton);

            let productPrice = createElement('p', [['class', 'product-price']])
            productPrice.innerHTML = `product price: ${product.price} $`

            let productRating = createElement('p', [['class', 'product-rating']])
            productRating.innerHTML = `product rating: ${product.rating.rate}`

            let productInfoBlock = createElement('div', [['class', 'product-info-block']])
            productInfoBlock.append(productPrice, productRating)

            productWrapper.append(productTitle, productImage, productAddWrapper, productInfoBlock)
            this.elem.append(productWrapper)

            productWrapper.addEventListener('click', (e) => {
                if (e.target.classList.contains('product-addToCart-button')) {
                    e.preventDefault();
                    addToCart(product)
                }
            })
        })
    }

    init() {
        return this.elem
    }
}

export default new Catalog().init()