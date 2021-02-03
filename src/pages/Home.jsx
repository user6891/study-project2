import React from 'react';
import { Categories, SortPopup } from '../component';
import { useDispatch, useSelector } from 'react-redux';

import PizzaBlock from '../component/PizzaBlock';
import { setCategory } from '../redux/actions/filters';

const categoriesData = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

function Home() {
  const pizzaItems = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();

  const onSelectedCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoriesData={categoriesData} onSelectedCategory={onSelectedCategory} />
        <SortPopup items={sortItems}  />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaItems?.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
