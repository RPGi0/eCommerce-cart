import React from 'react';
import {connect} from 'react-redux';
import * as A from '../redux/actions';
import Cart from '../components/Cart/Cart';

const cartGetSelectedValue = (e) => (
  e.target.value
);

const CartContainer = connect(
  (state) => {
    const stock = {}; // create an object map for stock to avoid quadratic time func

    // iterate over stock once, rather than `find(stockItem => cartItem.id === stockItem.id)`
    for (let i = 0; i < state.stock.length; i++) {
      stock[state.stock[i].id] = state.stock[i];
    }

    return {
      stock,
      cart: state.cart.map(cartItem => {
        const item = stock[cartItem.id];

        return {
          id: cartItem.id,
          name: item.name,
          price: item.price,
          img: item.img,
          count: cartItem.count,
          stockCount: item.count,
          productType: item.product_type
        };
      })
    }
  },
  (dispatch) => (
    {
      addBikeToCart: () => { // TODO: Delete once done debugging checkout process
        dispatch(A.addToCart(2, 1));
      },

      onQtyChange: (e, id) => {
        dispatch(A.updateCartItem(id, cartGetSelectedValue(e)));
      },

      onRemoveClick: (e, id) => {
        e.preventDefault();
        dispatch(A.removeFromCart(id));
      },

      dispatch: (reducer) => dispatch(reducer),
    }
  ),
  (stateProps, dispatchProps, ownProps) => (
    Object.assign({}, ownProps, stateProps, dispatchProps, {
      onPayClick: () => stateProps.cart.map(item => {
        dispatchProps.dispatch(A.removeStockItem(item.id, item.count));
        dispatchProps.dispatch(A.removeFromCart(item.id));
      }),
    })
  )
)(Cart);

export default CartContainer;