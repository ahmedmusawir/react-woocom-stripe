import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/layouts/Page';
import Content from '../../components/layouts/Content';
import { Row, Col, Button, Navbar } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import StripeContainer from '../../stripe/StripeContainer';
import './CheckoutPage.scss';

function CheckoutPage() {
  const { cartItems, itemCount, total } = useContext(CartContext);
  return (
    <>
      <Page wide={false} pageTitle="React Woocom" classes="cart-page pb-5 mb-5">
        <Row>
          <Col sm={12}>
            <Content width="w-100" cssClassNames="text-center">
              <h1 className="display-2">Checkout</h1>
            </Content>
          </Col>
        </Row>

        <Row className="animate__animated animate__fadeIn">
          <Col sm={7}>
            <StripeContainer total={total} cartItems={cartItems} />
          </Col>
          <Col sm={5} className="animate__animated animate__lightSpeedInRight">
            {/* SUMMARY SECTION */}
            <h5 className="font-weight-bold p-4 border">Summary</h5>
            <Content>
              <Row className="mb-2">
                <Col sm={8}>SubTotal:</Col>
                <Col sm={4}>${total}</Col>
              </Row>
              <Row className="mb-2">
                <Col sm={8}>Shipping & Handling:</Col>
                <Col sm={4}>FREE</Col>
              </Row>
              <Row className="mb-2">
                <Col sm={8}>Taxes:</Col>
                <Col sm={4}>None</Col>
              </Row>
              <Row className="mb-2 bg-light py-3">
                <Col sm={8}>
                  <h5 className="font-weight-bold">Total:</h5>
                </Col>
                <Col sm={4}>
                  <h5 className="font-weight-bold">${total}</h5>
                </Col>
              </Row>
            </Content>

            {/* IN CART SECTION */}
            <h5 className="font-weight-bold p-4 border">In Cart</h5>
            <Content>
              {cartItems.length &&
                cartItems.map((item) => (
                  <Row className="mb-4">
                    <Col sm={6}>
                      <img src={item.images[0].src} alt="" className="w-100" />
                    </Col>
                    <Col sm={6}>
                      <h4>{item.name}</h4>
                      <h6 className="font-weight-bold">Price: ${item.price}</h6>
                      <h6 className="font-weight-bold">
                        Quantity: {item.quantity}
                      </h6>
                    </Col>
                  </Row>
                ))}

              <Row className="mb-2 bg-light py-3 d-flex justify-content-end">
                <Link to="/cart">
                  <Button size="sm" variant="outline-info" className="mr-2">
                    Edit Cart
                  </Button>
                </Link>
              </Row>
            </Content>
          </Col>
        </Row>
      </Page>
      <Navbar bg="light" expand="md" fixed="bottom">
        <p className="mx-auto mt-2">Copyright CARS &copy; 2022</p>
      </Navbar>
    </>
  );
}

export default CheckoutPage;
