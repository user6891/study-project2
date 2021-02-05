const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZAS':
      const newItems = [...state.items, action.payload];
      console.log(newItems);
      return {
        ...state,
        items: newItems,
        totalPrice: newItems.reduce((prev, obj) => prev + obj.price, 0),
        totalCount: newItems.length,
      };
    case 'REMOVE_PIZZAS':
      let condition = true;
      const newItemsAfterRemove = state.items.filter((el) => {
        if (el.id === action.payload && condition) {
          console.log('REMOVE_PIZZAS');
          condition = false;
          return false;
        }
        return true;
      });

      return {
        ...state,
        items: newItemsAfterRemove,
        totalPrice: newItemsAfterRemove.reduce((prev, obj) => prev + obj.price, 0),
        totalCount: newItemsAfterRemove.length,
      };
    case 'REMOVE_ALL_WITH_ID_PIZZAS':
      const newItemsAfterRemove2 = state.items.filter((el) => el.id !== action.payload);

      return {
        ...state,
        items: newItemsAfterRemove2,
        totalPrice: newItemsAfterRemove2.reduce((prev, obj) => prev + obj.price, 0),
        totalCount: newItemsAfterRemove2.length,
      };
    case 'CLEAR_CART':

      return {
        items: [],
        totalPrice: 0,
        totalCount: 0,
      };

    default:
      return state;
  }
};

export default filterReducer;
