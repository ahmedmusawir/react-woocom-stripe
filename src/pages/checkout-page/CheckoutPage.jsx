import React, { useContext } from 'react';
import Page from '../../components/layouts/Page';
import Content from '../../components/layouts/Content';
import { Row, Col, Button, Navbar } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import './CheckoutPage.scss';
import img from '../../images/home-hero-pic.jpg';

function CheckoutPage() {
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

        <Row>
          <Col sm={7}>
            <h5 className="font-weight-bold p-4 border">Billing/Shipping</h5>
            <form className="form mt-3">
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="form-control mb-3"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Address"
                required
              />
              <input
                className="form-control mb-3"
                type="text"
                placeholder="State"
                required
              />
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Zip"
                required
              />

              <h5 className="font-weight-bold p-4 border mt-5 mb-3">Payment</h5>
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Credit Card"
                required
              />

              <button className="btn btn-lg btn-info btn-block">Pay Now</button>
            </form>
          </Col>
          <Col sm={5}>
            {/* SUMMARY SECTION */}
            <h5 className="font-weight-bold p-4 border">Summary</h5>
            <Content>
              <Row className="mb-2">
                <Col sm={8}>SubTotal:</Col>
                <Col sm={4}>$2100.00</Col>
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
                <Col sm={4}>$2100.00</Col>
              </Row>
            </Content>

            {/* IN CART SECTION */}
            <h5 className="font-weight-bold p-4 border">In Cart</h5>
            <Content>
              <Row className="mb-4">
                <Col sm={6}>
                  <img src={img} alt="" className="w-100" />
                </Col>
                <Col sm={6}>
                  <h4>Zion 3000Zx</h4>
                  <h6 className="font-weight-bold">Price: $1200</h6>
                  <h6 className="font-weight-bold">Quantity: 3</h6>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm={6}>
                  <img src={img} alt="" className="w-100" />
                </Col>
                <Col sm={6}>
                  <h4>Zion 3000Zx</h4>
                  <h6 className="font-weight-bold">Price: $1200</h6>
                  <h6 className="font-weight-bold">Quantity: 3</h6>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm={6}>
                  <img src={img} alt="" className="w-100" />
                </Col>
                <Col sm={6}>
                  <h4>Zion 3000Zx</h4>
                  <h6 className="font-weight-bold">Price: $1200</h6>
                  <h6 className="font-weight-bold">Quantity: 3</h6>
                </Col>
              </Row>

              <Row className="mb-2 bg-light py-3 d-flex justify-content-end">
                <Button size="sm" variant="outline-info">
                  Edit Cart
                </Button>
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
