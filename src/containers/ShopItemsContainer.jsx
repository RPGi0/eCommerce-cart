import React from 'react';
import {connect} from 'react-redux';
import ShopItems from '../components/Shop/ShopItems';


const ShopItemsContainer = connect(
  (state) => (
    { items: state.stock, }
  )
)(ShopItems);

export default ShopItemsContainer;