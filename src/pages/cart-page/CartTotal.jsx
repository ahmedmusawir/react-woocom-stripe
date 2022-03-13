import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function CartTotal({ total, itemCount, clearCart }) {
  return (
    <article className="total-block animate__animated animate__lightSpeedInRight">
      <h4 className="product-title mb-4">Total Items: {itemCount}</h4>
      <h5 className="product-price font-weight-bold mb-4">
        Total Cost: <span className="text-info">${total.toFixed(2)}</span>
      </h5>
      <Link to="/checkout">
        <Button variant="outline-info" size="block" className="mb-2">
          CHECKOUT
        </Button>
      </Link>
      <Button variant="danger" size="block" onClick={clearCart}>
        CLEAR
      </Button>
    </article>
  );
}

export default CartTotal;
