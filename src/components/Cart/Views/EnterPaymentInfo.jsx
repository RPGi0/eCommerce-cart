import React, { useState, useEffect } from 'react';
import Input from './Input';
import PayButton from '../../PayBtn';

const toTitleCase = function (str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
};

const EnterPaymentInfo = ({ cart, setCheckoutStep, setPaymentInfo, paymentInfo }) => {
  const [valid, setValidation] = useState(false);
  const [buttonMsg, setButtonMsg] = useState('Please fill out the required fields');

  useEffect(() => {
    let validationState = true;

    for (let k in paymentInfo) {
      if (!paymentInfo[k] && k !== 'apt_suite') {
        console.log('Invalid!');
        validationState = false;
        setButtonMsg(`Please fill out the ${toTitleCase(k.replace(/_/g, ' '))} field next`);
        break;
      }
    }

    setValidation(validationState);
  }, [paymentInfo]);

  const nextStep = () => {
    setCheckoutStep(3);
  };

  const updatePaymentInfo = (e) => {
    let enteredInfo = Object.assign({}, paymentInfo);
    enteredInfo[e.target.name] = e.target.value;
    setPaymentInfo(enteredInfo);
  };

  const btnText = (
    valid === true ?
      'Confirm Payment Info' :
      buttonMsg
  );

  return (
    <div className='view-cart'>
      <h1 className='main-header cart-header'>Enter Payment and Shipping Info</h1>

      <div className="checkout">
        <div className="checkout-form-container">
          <h3 className="heading-3">Shipping Info</h3>
          <Input label="* Full Name" type="text" name="full_name"
                 onChange={updatePaymentInfo} required
          />
          <Input label="* Shipping Address" type="text" name="shipping_address"
                 onChange={updatePaymentInfo} required
          />
          <Input label="Apt / Suite #" type="text" name="apt_suite"
                 onChange={updatePaymentInfo}
          />
          <Input label="* City" type="text" name="city"
            onChange={updatePaymentInfo} required
          />
          <Input label="* State" type="text" name="state"
                 onChange={updatePaymentInfo} required
          />
          <Input label="* Postal Code" type="number" name="zip" placeholder="XXXXX"
                 onChange={updatePaymentInfo} required
          />
          <br />
          <h3 className="heading-3">Payment Info</h3>
          <Input label="* Card Number" type="number" name="card_number"
             required onChange={updatePaymentInfo}
          />
          <div className="row">
            <div className="col">
              <Input label="* Expiration Date" type="text" name="exp_date" placeholder="MM-YYYY"
                onChange={updatePaymentInfo} required
              />
            </div>
            <div className="col">
              <Input label="* CVV" type="number" name="cvv" placeholder="XXX"
                onChange={updatePaymentInfo} required
              />
            </div>
          </div>
        </div>
      </div>
      <PayButton
        onPayClick={nextStep}
        disabled={!valid}
        buttonText={btnText}
      />
    </div>
  );
};

export default EnterPaymentInfo;
