import React from 'react';

const Categories = React.memo( function ({ categoriesData,onSelectedCategory,selectedCategory }) {

  const onItemsClick = (id) => {
    onSelectedCategory(id);
  };

  const onItemsAllClick = () => {
    onSelectedCategory(null);
  };
  console.log('categories render')
  return (
    <div className="categories">
      <ul>
        <li onClick={onItemsAllClick} className={selectedCategory === null ? 'active' : ''}>
          Все
        </li>
        {categoriesData?.map((name, id) => (
          <li
            className={selectedCategory === id ? 'active' : ''}
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
