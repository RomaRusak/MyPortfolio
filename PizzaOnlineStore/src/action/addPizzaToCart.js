
const addPizzaToCart = (name,price,image,id) => {

    return (
        {   
            type: 'ADD_PIZZA_TO_CART',
            name,
            price,
            image,
            id
        }
    )
}

export default addPizzaToCart