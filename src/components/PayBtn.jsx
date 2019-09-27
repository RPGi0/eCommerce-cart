import React from 'react';
import {Link} from 'react-router';

const PayButton = ({ onPayClick, disabled, buttonText }) =>
  (
    <button
      type='button'
      className={'cart-pay-button' + (disabled ? ' disabled' : '')}
      onClick={disabled ? () => {} : () => onPayClick()}
    >
      {buttonText}
    </button>
  );

export default PayButton;