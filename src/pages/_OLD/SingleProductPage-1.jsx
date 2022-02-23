import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import 'animate.css';

function SingleProductPage() {
  return (
    <Page wide={true} pageTitle="Single Product">
      <Container className="py-5">
        <Row>
          <Col sm={6}>
            <Content width="w-100 h-100" cssClassNames="text-center">
              <img
                className="w-100 animate__animated animate__fadeIn"
                src="http://localhost:10004/wp-content/uploads/2022/02/car-1.jpg"
                alt=""
              />
            </Content>
          </Col>
          <Col sm={6}>
            <Content
              width="w-100"
              cssClassNames="d-flex align-items-center h-100"
            >
              <article className="animate__animated animate__lightSpeedInRight">
                <h1 className="product-title mb-4">Jet Star 6000</h1>
                <h5 className="product-price font-weight-bold mb-4">$550.99</h5>
                <Button variant="outline-info" size="block">
                  ADD TO CART
                </Button>
                <Button variant="dark" size="block">
                  PROCEED TO CHECKOUT
                </Button>
                <p className="product-description mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus rerum commodi vel eveniet. Facere sequi est harum
                  molestias ex maxime sint doloremque, tempora quas adipisci
                  consequatur quia voluptas totam expedita?
                </p>
              </article>
            </Content>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default SingleProductPage;
