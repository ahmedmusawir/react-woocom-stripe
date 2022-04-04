import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainNavbar from './components/general/MainNavbar';
import { Navbar } from 'react-bootstrap';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import SingleProductPage from './pages/SingleProductPage';
import ShopPage from './pages/ShopPage';
import TestPage from './pages/TestPage';
import CartPage from './pages/cart-page/CartPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';
import CheckoutSuccess from './pages/checkout-page/CheckoutSuccess';
import './App.scss';
import ScrollToTop from './helpers/ScrollToTop';

function App(props) {
  return (
    <main>
      <MainNavbar />
      <ScrollToTop />
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
        <Route exact path="/checkout-success">
          <CheckoutSuccess />
        </Route>
        <Route exact path="/product/:id">
          <SingleProductPage />
        </Route>
        <Route exact path="/test">
          <TestPage />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
      <Navbar bg="light" expand="md" fixed="bottom">
        <p className="mx-auto mt-2">Copyright CARS &copy; 2022</p>
      </Navbar>
    </main>
  );
}

App.propTypes = {};

export default App;
