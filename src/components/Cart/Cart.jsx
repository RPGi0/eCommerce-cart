import React from 'react';
import CartItems from './CartItems';
import Total from '../Total';
import PayButton from '../PayBtn';

const Cart = ({ cart, onQtyChange, onRemoveClick, onPayClick }) => (
  <div className='cart'>
    <h1 className='main-header cart-header'>My Cart</h1>
    <CartItems
      cart={cart}
      onQtyChange={onQtyChange}
      onRemoveClick={onRemoveClick}
    />
    <Total cart={cart} />
    <PayButton onPayClick={onPayClick} />
  </div>
);

export default Cart;