import React from 'react';
import CartItem from './CartItem';



const CartItems = ({ cart, onQtyChange, onRemoveClick }) => {
  if (!cart.length) {
    return <p className='empty-cart'>Cart is empty</p>;
  }

  return (
    <ul className='cart-items'>
      {cart.map(item =>
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          img={item.img}
          count={item.count}
          stockCount={item.stockCount}
          onQtyChange={(e, id) => onQtyChange(e, id)}
          onRemoveClick={(e, id) => onRemoveClick(e, id)}
        />
      )}
    </ul>
  );
};

export default CartItems;