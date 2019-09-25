import React from 'react';
import {connect} from 'react-redux';
import * as A from '../redux/actions';
import Cart from '../components/Cart/Cart';

const cartGetSelectedValue = (e) => (
  e.target.value
);

const CartContainer = connect(
  (state) => (
    {
      cart: state.cart.map(cartItem => {
        const item = state.stock.find(stockItem => cartItem.id === stockItem.id);
        return {
          id: cartItem.id,
          name: item.name,
          price: item.price,
          img: item.img,
          count: cartItem.count,
          stockCount: item.count,
        };
      }),
    }
  ),
  (dispatch) => (
    {
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
      onPayClick: () =>
        stateProps.cart.map(item => {
          dispatchProps.dispatch(A.removeStockItem(item.id, item.count));
          dispatchProps.dispatch(A.removeFromCart(item.id));
        }),
    })
  )
)(Cart);

export default CartContainer;