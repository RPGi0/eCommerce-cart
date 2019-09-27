import React, { useState } from 'react';
import PayButton from '../../PayBtn';


const OrderConfirmation = ({ state, cart, onPayClick, setCheckoutStep }) => {
  const nextStep = () => {
    onPayClick();
    setCheckoutStep(1);
  };

  // const userInfo = state.paymentInfo.values();

  return (
    <div className='view-cart'>
      <h1 className='main-header cart-header'>Order Confirmation</h1>
      <div>
        {/*{userInfo}*/}
      </div>
      <PayButton
        onPayClick={nextStep}
        buttonText='Confirm'
      />
    </div>
  );
};

export default OrderConfirmation;
