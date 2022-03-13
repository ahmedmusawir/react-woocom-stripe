import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Page from '../components/layouts/Page';
import { Row, Col, Button, Navbar, Container } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { ProductsContext } from '../context/ProductsContext';

import hero from '../images/home-hero-pic.jpg';
import './HomePage.scss';
import 'animate.css';
import Product from '../components/common/Product';

function HomePage() {
  const { featured } = useContext(ProductsContext);
  const featuredItems = featured.map((product) => (
    <Col
      key={product.id}
      sm={12}
      md={4}
      className="d-flex justify-content-center"
    >
      <Product product={product} />
    </Col>
  ));

  const history = useHistory();
  const goToShop = () => {
    window.scrollTo(0, 0);
    history.push('/shop');
  };

  return (
    <>
      <Page wide={true} pageTitle="React Woocom" classes="home-page pb-5 mb-5">
        <Row>
          <Col sm={12}>
            <Content width="w-100" cssClassNames="text-center">
              <h1 className="display-2">Cars</h1>
              <img
                className="w-100  animate__animated animate__fadeIn"
                src={hero}
                alt=""
              />
              <Button
                variant="outline-dark"
                size="lg"
                onClick={goToShop}
                className="animate__animated animate__fadeIn"
              >
                Start Shopping
              </Button>
            </Content>
          </Col>
        </Row>
        <Container className="py-5 animate__animated animate__fadeIn">
          <Row>
            <Col sm={6}>
              <Content width="w-100 border h-100" cssClassNames="text-center">
                <img
                  className="w-100"
                  src="http://blockbuster.dns.army:8000/wp-content/uploads/2022/02/car-23.jpg"
                  alt=""
                />
              </Content>
            </Col>
            <Col sm={6}>
              <Content
                width="w-100"
                cssClassNames="d-flex align-items-center h-100 bg-light"
              >
                <article>
                  <h1>The Car of the Future...</h1>
                  <p>
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
        <Content>
          <Row>
            <Col sm={12} className="d-flex justify-content-center">
              <Content width="w-100" cssClassNames="text-center">
                <h1 className="font-weight-bold">Featured Products</h1>
              </Content>
            </Col>
          </Row>
          <Row>{featuredItems}</Row>
        </Content>
      </Page>
      <Navbar bg="light" expand="md" fixed="bottom">
        <p className="mx-auto mt-2">Copyright CARS &copy; 2022</p>
      </Navbar>
    </>
  );
}

export default HomePage;
