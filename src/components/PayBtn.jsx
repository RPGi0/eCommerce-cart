import React from 'react';

const PayButton = ({ onPayClick }) => (
  <button
    type='button'
    className='cart-pay-button'
    onClick={() => onPayClick()}
  >
    Pay now
  </button>
);

export default PayButton;


