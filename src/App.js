import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './component';
import { Cart, Home } from './pages';


function App() {


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
