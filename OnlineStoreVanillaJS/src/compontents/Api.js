class ApiGetDate {

    constructor() {
        
    };

    getDateAllProducts() {
        return fetch("https://fakestoreapi.com/products")
    };

    getDateProduct(productId) {
        return fetch(`https://fakestoreapi.com/products/${productId}`)
    }
}

export default ApiGetDate