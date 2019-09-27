import React from 'react';
import {connect} from 'react-redux'

import AddItem from '../components/AddItem';
import * as A from '../redux/actions';

let recentlyAdded = 0;

const addItemGetSelectedValue = (e) => (
  e.target.getElementsByClassName('item-qty')[0].value
);

const AddItemContainer = connect(
  (state, ownProps) => (
    {
      id: ownProps.id,
      count: state.stock.find(item => item.id === ownProps.id).count,
      inCart: state.cart.some(item => item.id === ownProps.id),
      recentlyAdded
    }
  ),
  null,
  (stateProps, dispatchProps, ownProps) => {
    const onSubmit = stateProps.inCart ? A.updateCartItem : A.addToCart;

    return Object.assign({}, ownProps, stateProps, dispatchProps, {
      onSubmit: (e, id) => {
        recentlyAdded = Math.round(Date.now() / 1000);

        dispatchProps.dispatch(onSubmit(id, addItemGetSelectedValue(e)));
      },
    });
  }
)(AddItem);

export default AddItemContainer;
