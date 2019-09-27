import React, {useEffect} from 'react';
import * as helper from '../helper';

const AddItem = ({ id, count, onSubmit, recentlyAdded }) => {
  let currentTime = Math.round(Date.now() / 1000);
  let recentAdd = (currentTime <= (recentlyAdded + 1));

  const timer = setInterval(() => {
    currentTime = Math.round(Date.now() / 1000);
  }, 2500);

  useEffect(() => {
    return () => { // clean up our interval on unmount for good performance
      recentAdd = false;
      clearInterval(timer);
    };
  });

  if (!count) {
    return (
      <p className='item-sold-out'>
        Sold out!
      </p>
    );
  }

  return (
    <form
      className='item-add-form'
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e, id);
      }}
    >
      <span className='item-qty-label'>
        Qty:
      </span>

      <select className='item-qty'>
        {helper.getOptionsArray(count).map(num =>
          <option
            key={num}
            value={num}
          >
            {num}
          </option>
        )}
      </select>

      <button
        className={'item-add-button' + (recentAdd ? ' recent-add' : '')}
        type='submit'
      >
        {recentAdd ? 'Added to cart!' : 'Add to cart'}
      </button>
    </form>
  );
};

export default AddItem;
