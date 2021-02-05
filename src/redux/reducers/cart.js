const initialState = {
  items: {
  },
  totalPrice: 0,
  totalCount: 0,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZAS':
        const newItems = {
            ...state.items,
            [action.payload.id]: !state.items[action.payload.id]
            ? [action.payload]
            :[...state.items[action.payload.id], action.payload]
        }
        console.log(newItems)
      return { 
        ...state,
        items: newItems,
        totalPrice: state.totalPrice + action.payload.price,
        totalCount: state.totalCount + 1,
    };

    default:
      return state;
  }
};

export default filterReducer;
