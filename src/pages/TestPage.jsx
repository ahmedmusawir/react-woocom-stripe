import React, { useContext } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col, Navbar } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { setOrder } from '../services/HttpService';

function TestPage() {
  const data = {
    payment_method: 'bacs',
    payment_method_title: 'Direct Bank Transfer',
    set_paid: true,
    billing: {
      first_name: 'John',
      last_name: 'Doe',
      address_1: '969 Market',
      address_2: '',
      city: 'San Francisco',
      state: 'CA',
      postcode: '94103',
      country: 'US',
      email: 'john.doe@example.com',
      phone: '(555) 555-5555',
    },
    shipping: {
      first_name: 'John',
      last_name: 'Doe',
      address_1: '969 Market',
      address_2: '',
      city: 'San Francisco',
      state: 'CA',
      postcode: '94103',
      country: 'US',
    },
    line_items: [
      {
        product_id: 93,
        quantity: 2,
      },
      {
        product_id: 22,
        variation_id: 23,
        quantity: 1,
      },
    ],
    shipping_lines: [
      {
        method_id: 'flat_rate',
        method_title: 'Flat Rate',
        total: '10.00',
      },
    ],
  };

  const handleClick = () => {
    const url = 'orders';
    setOrder(url, data);
  };
  return (
    <>
      <Page wide={false} pageTitle="React Woocom" classes="home-page pb-5 mb-5">
        <Content width="w-100 h-100" cssClassNames="text-center">
          <h1 className="product-title display-2">Test</h1>
          <button className="btn btn-info btn-lg" onClick={handleClick}>
            Post Order
          </button>
        </Content>
      </Page>
      <Navbar bg="light" expand="md" fixed="bottom">
        <p className="mx-auto mt-2">Copyright CARS &copy; 2022</p>
      </Navbar>
    </>
  );
}

export default TestPage;
