import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/layouts/Page';
import Content from '../../components/layouts/Content';
import { Row, Col, Button, Navbar } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import StripeContainer from '../../stripe/StripeContainer';
import bugattiBack from '../../images/home-hero-pic.jpg';

function CheckoutSuccess() {
  const { cartItems, itemCount, total } = useContext(CartContext);
  return (
    <>
      <Page wide={false} pageTitle="React Woocom" classes="cart-page pb-5 mb-5">
        <Row>
          <Col sm={12}>
            <Content width="w-100" cssClassNames="text-center">
              <h1 className="display-2 text-success">Success!</h1>
            </Content>
            <div className="text-center">
              <h2 className="">
                Thankyou for giving us all your money ... Gottcha!!
              </h2>
              <h3 className="text-danger">
                You will NEVER receive your shipment ... you dummy!!!
              </h3>
              <div className="">
                <img src={bugattiBack} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Page>
      <Navbar bg="light" expand="md" fixed="bottom">
        <p className="mx-auto mt-2">Copyright CARS &copy; 2022</p>
      </Navbar>
    </>
  );
}

export default CheckoutSuccess;
