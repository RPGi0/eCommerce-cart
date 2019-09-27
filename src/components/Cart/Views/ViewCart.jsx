import React, { useState } from 'react';
import CartItems from './../CartItems';
import Total from '../../Total';
import PayButton from '../../PayBtn';

const ViewCart = ({ cart, onQtyChange, onRemoveClick, setCheckoutStep }) => {
  // If we don't yet have a bike, disable the payment button:
  const disablePayment = !cart.find(item => item.productType === 'bike');

  const nextStep = () => {
    setCheckoutStep(2);
  };

  const buttonText = disablePayment ? 'Choose a bike to proceed to check out!' : 'Pay now';

  return (
    <div className='view-cart'>
      <h1 className='main-header cart-header'>My Cart</h1>

      <CartItems
        cart={cart}
        onQtyChange={onQtyChange}
        onRemoveClick={onRemoveClick}
      />

      <Total cart={cart} />

      <PayButton
        onPayClick={nextStep}
        disabled={disablePayment}
        buttonText={buttonText}
      />
    </div>
  );
};

export default ViewCart;
