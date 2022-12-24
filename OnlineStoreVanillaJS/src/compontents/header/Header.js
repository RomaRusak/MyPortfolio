import style from "./styleHeader.scss"

class Header{

    constructor() {
        this.elem = document.createElement('header')
        this.elem.classList.add('header')
        this.elem.innerHTML = `
        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-link">
                    <a href="#Home">home</a>
                </li>
                <li class="nav-link">
                    <a href="#Catalog">catalog</a>
                </li>
                <li class="nav-link">
                    <a href="#CartInner">cart</a>
                </li>
            </ul>
        </nav>
        `
    }

    init() {
        return this.elem
    }
}

export default new Header().init()