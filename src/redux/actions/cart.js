export const addPizzas = (payload) => ({type: 'ADD_PIZZAS', payload})
export const removePizzas = (payload) => ({type: 'REMOVE_PIZZAS', payload})
export const removeAllWithIdPizzas = (payload) => ({type: 'REMOVE_ALL_WITH_ID_PIZZAS', payload})
export const clearCart = () => ({type: 'CLEAR_CART'})