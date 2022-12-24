import style from "./styleMain.scss";
import ProductCard from "./ProductCard";

class Main{

    constructor() {
        this.elem = document.createElement('main')
        this.elem.classList.add('main')
        this.routing()
        this.routing = this.routing.bind(this)
    }

    routing() {
        window.addEventListener('hashchange', () => {
            let hash = window.location.hash;
            hash = hash.slice(1);
            let hashId = hash.indexOf('/') + 1;
            if (hashId == 0) {     
                import(`./${hash}`)
                .then(resp => {
                    if (hash == 'CartInner') {
                        resp.cartPageRender()
                    }
                    document.querySelector('.main').innerHTML = '';
                    document.querySelector('.main').append(resp.default)
                })
            } else {
               let id = hash.slice(hashId);
               let modalWrapper = new ProductCard(id).init();
               document.querySelector('.main').append(modalWrapper);
            }
        })   
        
        window.addEventListener('load', () => {
            window.location.hash = `#Catalog`;
            import('./Catalog')
            .then(resp => {
                document.querySelector('.main').append(resp.default)
            })
        })
    }

    init() {
        return this.elem
    }
}

export default new Main().init()