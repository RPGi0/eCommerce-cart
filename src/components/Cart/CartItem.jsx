import React from 'react';
import {Link} from 'react-router'

import * as helper from '../../helper';

const CartItem = (
  { id, name, price, img, count, stockCount, onQtyChange, onRemoveClick }
) => (
  <li className={'cart-item cart-item-' + id}>
    <Link
      to={'/item/' + id}
      className='cart-item-image-link'
    >
      <img
        className='cart-item-image'
        src={img}
      />
    </Link>
    <div className='cart-item-info'>
      <Link
        to={'/item/' + id}
        className='cart-item-name-link'
      >
        <h1 className='cart-item-name'>
          {name}
        </h1>
      </Link>
      <div className='cart-item-value'>
        <span className='cart-item-price'>
        ${price.toFixed(2)}
        </span>
        <span className='cart-item-qty'>
        Qty:
          <select
            className='cart-item-qty-select'
            value={count}
            onChange={(e) => onQtyChange(e, id)}
          >
          {helper.getOptionsArray(stockCount).map(num =>
            <option
              key={num}
              value={num}
            >
              {num}
            </option>
          )}
          </select>
        </span>
      </div>
    </div>
    <a
      href="#"
      className='cart-item-delete'
      onClick={(e) => {
        onRemoveClick(e, id);
      }}
    >
      ×
    </a>
  </li>
);

export default CartItem;