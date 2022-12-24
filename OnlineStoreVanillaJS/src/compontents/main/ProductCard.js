import ApiGetDate from "../Api";
import createElement from "../createElement";
import { addToCart } from "../cart/Cart";

class ProductCard {

    constructor(id) {
        this.elem = document.createElement('div');
        this.elem.classList.add('modale-wrapper')
        this.data = null
        this.getInfo(id)
    }

    async getInfo(id) {
        let resp = await new ApiGetDate().getDateProduct(id);
        this.data = await resp.json()
        this.render()         
    }

    render() {
        document.querySelector('body').classList.add('stopScroll');
        document.querySelector('.catalog-wrapper').classList.add('opacity')
        let modalContainer = createElement('div', [['class', 'modal-container']]);             
        let modalTitle = createElement('h2', [['class','modal-tile']], this.data.title);
        let modalCloseWrapper = createElement('p', [['class', 'modal-close']], 'X');
        modalCloseWrapper.addEventListener('click', (e) => {
            let main = document.querySelector('.modale-wrapper');
            main.remove()
            window.location.hash = '#Catalog'
            document.querySelector('body').classList.remove('stopScroll');
            document.querySelector('.catalog-wrapper').classList.remove('opacity')
        });
        modalCloseWrapper.addEventListener('mouseenter', () => {
            document.querySelector('.modale-wrapper').style.backgroundColor = 'rgba(0,0,0,0.1)';
            document.querySelector('.opacity').style.opacity = 1;
        });
        modalCloseWrapper.addEventListener('mouseleave', () => {
            document.querySelector('.modale-wrapper').style.backgroundColor = 'rgba(0,0,0,0.4)';
            document.querySelector('.opacity').style.opacity = .4;
        });

        let modalAddWrapper = createElement('div', [['class', 'modal-addToCart-wrapper']]);
        let modaAddButton = createElement('button', [['class', 'modal-addToCart-button']], 'Add to cart');
        modalAddWrapper.append(modaAddButton)

        let modalTopContainer = createElement('div', [['class', 'modal-top-container']])
        modalTopContainer.append(modalTitle, modalCloseWrapper)
        let modalImg = createElement('img', [['class', 'modal-img'], ['src', this.data.image]]);
        let modalDescription = createElement('p', [['class', 'modal-description']], this.data.description);
        let modalBottomContainer = createElement('div', [['class', 'modal-bottom-container']])
        let modalRating = createElement('p', [['class', 'modal-rating']], `product rating: ${this.data.rating.rate}`);
        let modalPrice = createElement('p', [['class', 'modal-price']], `product price: ${this.data.price} $`)
        modalBottomContainer.append(modalRating, modalPrice);

        modalContainer.append(modalTopContainer, modalImg, modalAddWrapper, modalDescription, modalBottomContainer);
        this.elem.append(modalContainer);

        modaAddButton.addEventListener('click', (e) => {
            addToCart(this.data)
        })
    }

    init() {
        return this.elem
    }

}

export default ProductCard

