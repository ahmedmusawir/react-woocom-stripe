import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
  'pk_test_51H4FFfGUMnNXbOx0cnb8RA8ATK5Yp7s2r57OPFmCNGB2Qp9i9YJcst9917gA87mbMp5qmzRjgFbYadb9yU4o6VJy001SyNmKJJ';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

function StripeContainer({ total, cartItems, clearCart }) {
  const totalAmount = total * 100;
  const lineItems = [];

  cartItems.map((item) => {
    const cartItem = {
      product_id: item.id,
      quantity: item.quantity,
    };

    lineItems.push(cartItem);
    return null;
  });

  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm
        totalAmount={totalAmount}
        lineItems={lineItems}
        clearCart={clearCart}
      />
    </Elements>
  );
}

export default StripeContainer;
