import React from 'react';
import { Categories, SortPopup } from '../component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import PizzaBlock from '../component/PizzaBlock/index';
import { setCategory, setSortBy } from '../redux/actions/filters';
import LoadingBlock from '../component/PizzaBlock/LoadingBlock';
import { addPizzas } from '../redux/actions/cart';
import {categoriesData,sortItems} from '../data'


function Home() {
  const pizzaItems = useSelector(({ pizzas }) => pizzas.items);
  const sortBy = useSelector(({ filters }) => filters.sortBy.type);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const selectedCategory = useSelector(({ filters }) => filters.category);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, selectedCategory));
  }, [sortBy, selectedCategory]);

  const onSelectedCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSetSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const onAddPizzas = (obj) => {

    dispatch(addPizzas(obj));
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoriesData={categoriesData}
          onSelectedCategory={onSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <SortPopup items={sortItems} sortBy={sortBy} onSetSortBy={onSetSortBy} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? Array(12)
              .fill(0)
              .map(() => <LoadingBlock />)
          : pizzaItems?.map((item) => <PizzaBlock onAddPizzas={onAddPizzas} key={item.id} {...item} />)}
      </div>
    </div>
  );
}

export default Home;
