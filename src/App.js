import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './index.scss';
import HeaderContainer from './containers/HeaderContainer';
import Shop from './components/Shop/Shop';
import ItemContainer from './containers/ItemContainer';
import CartContainer from './containers/CartContainer';
import NoMatch from './components/NoMatch';
import {reducers} from './redux/reducers';

const initialState = {
  cart: [],
  stock: [
    {
      id: 1,
      name: "Adult Male Bike",
      description: "",
      price: 20.50,
      count: 10,
      img: "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
      product_type: "bike"
    },
    {
      id: 2,
      name: "Adult Female Bike",
      description: "",
      price: 20.50,
      count: 10,
      img: "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
      product_type: "bike"
    },
    {
      id: 3,
      name: "Kids Unisex Bike",
      description: "",
      price: 12.75,
      count: 10,
      img: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
      product_type: "bike"
    },
    {
      id: 4,
      name: "Adult Unisex Helmet",
      description: "",
      price: 4.00,
      count: 10,
      img: "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
      product_type: "accessory"
    },
    {
      id: 5,
      name: "Kids Unisex Helmet",
      description: "",
      price: 3.50,
      count: 10,
      img: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
      product_type: "accessory"
    },
    {
      id: 6,
      name: "Insurance",
      description: "",
      price: 9.99,
      count: 10,
      img: "http://via.placeholder.com/250x250?text=Insurance",
      product_type: "addon"
    }
  ],
};

const store = createStore(reducers, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={HeaderContainer}>
        <IndexRoute component={Shop} />
        <Route path='item/:id' component={ItemContainer} />
        <Route path='cart' component={CartContainer} />
        <Route path='*' component={NoMatch} />
      </Route>
    </Router>
  </Provider>
);

export default App;
