const initialState = {
  items: [],
  isLoaded: true,
};

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return { ...state, items: action.payload };
    case 'SET_LOADED':
      return { ...state, isLoaded: action.payload };

    default:
      return state;
  }
};
export default pizzasReducer;
