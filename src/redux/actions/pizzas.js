export const setLoaded = (value) => ({ type: 'SET_LOADED', payload: value });

export const setPizzas = (value) => ({ type: 'SET_PIZZAS', payload: value });

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(true));
  fetch(
    `http://localhost:3001/pizzas?${
      category !== null ? 'category=' + category + '&' : ''
    }_sort=${sortBy}`,
  )
    .then((res) => res.json())
    .then((res) => {
      setTimeout(() => {
        dispatch(setPizzas(res));
        dispatch(setLoaded(false));

      }, 1000);
    });
};
