import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { setOrder } from '../services/HttpService';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

// CARD OPTIONS FOR STRIPE
const CARD_OPTIONS = {
  iconStyle: 'solid',
  hidePostalCode: true,
  style: {
    base: {
      iconColor: 'black',
      color: 'black',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: 'darkorchid' },
    },
    invalid: {
      iconColor: 'red',
      color: 'red',
    },
  },
};

export default function PaymentForm({ totalAmount, lineItems, clearCart }) {
  const history = useHistory();
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  // SUBMIT EVENT FOR STRIPE FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    // BILLING DETAILS FOR STRIPE
    const billingDetails = {
      name: e.target.name.value,
      email: e.target.email.value,
      address: {
        city: e.target.city.value,
        line1: e.target.address.value,
        state: e.target.state.value,
        postal_code: e.target.zip.value,
      },
    };

    // SETTING STRIPE PAYMENT METHOD
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    });

    // WOOCOM ORDER INFO
    const woocomOrderBilling = {
      first_name: e.target.name.value,
      last_name: '',
      address_1: e.target.address.value,
      address_2: '',
      city: e.target.city.value,
      state: e.target.state.value,
      postcode: e.target.zip.value,
      country: 'US',
      email: e.target.email.value,
      phone: '(555) 555-5555',
    };

    // WOOCOM MAIN DATA OBJECT
    const data = {
      payment_method: 'credit',
      payment_method_title: 'Credit Card',
      set_paid: true,
      billing: woocomOrderBilling,
      shipping: woocomOrderBilling,
      line_items: lineItems,
      shipping_lines: [
        {
          method_id: 'flat_rate',
          method_title: 'FREE',
          total: '0.00',
        },
      ],
    };

    // MAKING CALL TO STRIPE MIDDLEWARE (NODE JS & EXPRESS)
    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post('http://localhost:4000/payment', {
          amount: totalAmount,
          id,
        });

        if (response.data.success) {
          console.log('Successful payment');
          setSuccess(true);
          // CREATING WOOCOM ORDER
          const url = 'orders';
          setOrder(url, data);
          clearCart();
        }
      } catch (error) {
        console.log('Error', error);
      }
    } else {
      console.log(error.message);
    }
  };

  if (!success) {
    return (
      <>
        <h5 className="font-weight-bold p-4 border">Billing/Shipping</h5>

        <form onSubmit={(e) => handleSubmit(e)}>
          <fieldset className="FormGroup">
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="form-control mb-3"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Address"
              name="address"
              required
            />
            <input
              className="form-control mb-3"
              type="text"
              placeholder="City"
              name="city"
              required
            />
            <input
              className="form-control mb-3"
              type="text"
              placeholder="State"
              name="state"
              required
            />
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Zip"
              name="zip"
              required
            />

            <h5 className="font-weight-bold p-4 border mt-5 mb-3">Payment</h5>
            <div className="FormRow border p-2 mb-2">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="btn btn-info btn-block p-3">Pay Now</button>
        </form>
      </>
    );
  } else {
    history.push('/checkout-success');
    return '';
  }
}
