import style from "./styleFooter.scss"

class Footer{

    constructor() {
        this.elem = document.createElement('footer')
        this.elem.classList.add('footer')
    }

    init() {
        return this.elem
    }
}

export default new Footer().init()