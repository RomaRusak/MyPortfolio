
const removePizzaFromCart = (id) => {

    return (
        {
            type: 'REMOVE_PIZZA_FROM_CART',
            id
        }
    )
}

export default removePizzaFromCart