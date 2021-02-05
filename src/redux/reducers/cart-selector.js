import { createSelector } from 'reselect';

const getCartPizzas = (state) => state.cart.items;

const checkPizzaInArray = (array, pizza) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.pizza.id == pizza.id) {
      return i;
    }
  }
  return false;
};
export const getCartData = createSelector(getCartPizzas, (pizzas) => {
  const result = [];
  //[{pizza: {p}, count: 1, totalPrice: 200}, ]
  pizzas.forEach((pizza) => {
    let check = checkPizzaInArray(result, pizza);
    if (check !== false) {
      result[check].count++;
      result[check].totalPrice += pizza.price;
    } else {
        result.push({pizza, count: 1, totalPrice: pizza.price})
    }
  });
  return result;
});



