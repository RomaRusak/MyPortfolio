const pizza = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':
            const key = action.id
            let index 
            state.forEach((item, indexItem) => {
                if (item.id == key) index = indexItem
            })

            if (index === undefined) {
                return [
                    ...state,
                            {
                                name: action.name,
                                price: +action.price,
                                image: action.image,
                                id: action.id,
                                counter: 1,
                                sumCounter: +action.price
                            }
                ]   
            }

            let newPizza = [...state]
            newPizza[index].counter++
            newPizza[index].sumCounter = newPizza[index].sumCounter + newPizza[index].price
            return newPizza
        
        case 'REMOVE_PIZZA_FROM_CART':
            let pizzaNew = [...state]
            let indexNew
            pizzaNew.forEach((item, indexItem) => {
                if (item.id == action.id) indexNew = indexItem
            })
            pizzaNew[indexNew].counter--
            pizzaNew[indexNew].sumCounter = pizzaNew[indexNew].sumCounter - pizzaNew[indexNew].price
            pizzaNew = pizzaNew.filter((item) => item.counter > 0)
            return pizzaNew
        
        case 'CLEAN_CART_ALL':
            return []    
        
        default:
            return state
    }
}

export default pizza