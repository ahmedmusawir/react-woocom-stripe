import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainNavbar from './components/general/MainNavbar';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import SingleProductPage from './pages/SingleProductPage';
import ShopPage from './pages/ShopPage';
import './App.scss';
import TestPage from './pages/TestPage';
import CartPage from './pages/cart-page/CartPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';

function App(props) {
  return (
    <main>
      <MainNavbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path="/product/:id">
          <SingleProductPage />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}

App.propTypes = {};

export default App;
