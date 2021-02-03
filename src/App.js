import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from './component';
import { Cart, Home } from './pages';
import { setPizzas } from './redux/actions/pizzas';


function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then((res) => res.json())
      .then((res) => dispatch(setPizzas(res)));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   pizzaItems: state.pizzas.items,
//   setSortBy: state.filters.setSortBy,
// });
// const mapDispatchToProps = (dispatch) => ({
//   setPizzas: (payload) => dispatch(setPizzas(payload)),
// });

export default App;
