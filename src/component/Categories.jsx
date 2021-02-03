import React from 'react';

const Categories = React.memo( function ({ categoriesData,onSelectedCategory }) {
  const [itemsSelected, setItemsSelected] = React.useState(null);

  const onItemsClick = (id) => {
    setItemsSelected(id);
    onSelectedCategory(id);
  };

  const onItemsAllClick = () => {
    setItemsSelected(null);
  };
  console.log('categories render')
  return (
    <div className="categories">
      <ul>
        <li onClick={onItemsAllClick} className={itemsSelected === null ? 'active' : ''}>
          Все
        </li>
        {categoriesData?.map((name, id) => (
          <li
            className={itemsSelected === id ? 'active' : ''}
            onClick={() => onItemsClick(id)}
            key={`${id}_${name}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
})

export default Categories;
