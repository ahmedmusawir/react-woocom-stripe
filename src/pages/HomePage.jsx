import React, { useEffect } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col, Button, Card, Navbar, Container } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import hero from '../images/home-hero-pic.jpg';
import './HomePage.scss';
import products from '../carData';
import { getData } from '../services/HttpService';

function HomePage() {
  useEffect(() => {
    const getProducts = async () => {
      const data = await getData();
      console.log('WOOCOM DATA', data);
    };
    getProducts();
  }, []);

  const featuredItems = products
    .filter((product, i) => i < 3)
    .map((product) => (
      <Col
        key={product.id}
        sm={12}
        md={4}
        className="d-flex justify-content-center"
      >
        {/* <Card style={{ width: '30rem' }}> */}
        <Card>
          <figure className="img-holder">
            <Card.Img variant="top" src={product.images[0].src} />
          </figure>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text className="font-weight-bold">${product.price}</Card.Text>
            <Button variant="dark" size="block">
              ADD TO CART
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <>
      <Page wide={true} pageTitle="React Woocom" classes="home-page pb-5 mb-5">
        <Row>
          <Col sm={12}>
            <Content width="w-100" cssClassNames="text-center">
              <h1 className="display-2">Cars</h1>
              <img className="w-100" src={hero} alt="" />
              <Button variant="outline-dark" size="lg">
                Start Shopping
              </Button>
            </Content>
          </Col>
        </Row>
        <Container className="py-5">
          <Row>
            <Col sm={6}>
              <Content width="w-100 border h-100" cssClassNames="text-center">
                <img
                  className="w-100"
                  src="http://localhost:10004/wp-content/uploads/2022/02/car-23.jpg"
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
        <Row>
          <Col sm={12} className="d-flex justify-content-center">
            <Content width="w-100" cssClassNames="text-center">
              <h1 className="font-weight-bold">Featured Products</h1>
            </Content>
          </Col>
        </Row>
        <Row>{featuredItems}</Row>
      </Page>
      <Navbar bg="light" expand="md" fixed="bottom">
        <p className="mx-auto mt-2">Copyright &copy; 2022</p>
      </Navbar>
    </>
  );
}

export default HomePage;
