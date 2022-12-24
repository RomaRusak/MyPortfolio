import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import {cartWidget} from "./cart/Cart";


class App {

    constructor(selector) {

        this.root = document.querySelector(selector);
        this.elem = document.createElement('div');

    }

    render() {
        this.root.append(Header, Main, Footer, cartWidget)
    }

    init() {
        this.render()
    }

}

export default App