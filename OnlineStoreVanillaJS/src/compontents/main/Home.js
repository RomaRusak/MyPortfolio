class Home {

    constructor() {
        this.elem = document.createElement('div');
        this.elem.classList.add('home-wrapper');
        this.elem.innerHTML = `
        <h2>Home</h2>
        `
    }

    init() {
        return this.elem
    }
}

export default new Home().init()