import React from 'react';
import ShopItem from './ShopItem';

const ShopItems = ({ items }) => {
  if (!items.length) {
    return <p className='no-shop-items'>No items</p>;
  }

  return (
    <ul className='shop-item-list'>
      {items.map(item =>
        <ShopItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          img={item.img}
        />
      )}
    </ul>
  );
};


export default ShopItems;