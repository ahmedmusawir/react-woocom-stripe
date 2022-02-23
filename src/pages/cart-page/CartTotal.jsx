import React from 'react';
import { Button } from 'react-bootstrap';

function CartTotal({ total, itemCount }) {
  return (
    <article className="total-block animate__animated animate__lightSpeedInRight">
      <h4 className="product-title mb-4">Total Items: {itemCount}</h4>
      <h5 className="product-price font-weight-bold mb-4">
        Total Cost: <span className="text-info">${total}</span>
      </h5>
      <Button variant="outline-info" size="block">
        CHECKOUT
      </Button>
      <Button variant="danger" size="block">
        CLEAR
      </Button>
    </article>
  );
}

export default CartTotal;
