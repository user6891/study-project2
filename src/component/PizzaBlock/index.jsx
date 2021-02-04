import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LoadingBlock from './LoadingBlock';

function PizzaBlock({ name, types, sizes, price, imageUrl }) {
  const availableSizes = [26, 30, 40];
  const availableTypes = ['тонкое', 'традиционное'];
  const [selectedType, setSelectedType] = React.useState(types[0]);
  const [selectedSize, setSelectedSize] = React.useState(sizes[0]);

  const onClickType = (id) => {
    setSelectedType(id);
  };
  const onClickSize = (item) => {
    setSelectedSize(item);
  };

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((name, id) => (
            <li
              key={id}
              onClick={() => onClickType(id)}
              className={classNames({
                active: selectedType === id,
                disabled: !types.includes(id),
              })}>
              {name}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((item, id) => {
            return (
              <li
                key={id}
                onClick={() => onClickSize(item)}
                className={classNames({
                  active: selectedSize === item,
                  disabled: !sizes.includes(item),
                })}>
                {item} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
};
PizzaBlock.defaultProps = {
  types: [],
  sizes: [],
};
export default PizzaBlock;
