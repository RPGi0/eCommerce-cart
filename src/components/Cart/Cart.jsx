import React, { useState } from 'react';
import ViewCart from './Views/ViewCart';
import EnterPaymentInfo from './Views/EnterPaymentInfo';
import OrderConfirmation from './Views/OrderConfirmation';

const Cart = ({ cart, onQtyChange, onRemoveClick, onPayClick, addBikeToCart}) => {
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [paymentInfo, setPaymentInfo] = useState({
    full_name: '',
    shipping_address: '',
    apt_suite: '',
    city: '',
    state: '',
    zip: '',
    card_number: '',
    exp_date: '',
    cvv: ''
  });

  const props = {
    cart,
    onQtyChange,
    onRemoveClick,
    onPayClick,
    paymentInfo,
    setCheckoutStep
  };

  return (
    <div className='cart'>
      {checkoutStep === 1 && <ViewCart {...props} />}
      {checkoutStep === 2 && <EnterPaymentInfo {...props} setPaymentInfo={setPaymentInfo} />}
      {checkoutStep === 3 && <OrderConfirmation {...props} />}
    </div>
  );
};

export default Cart;

