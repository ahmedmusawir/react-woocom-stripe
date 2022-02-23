import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Page from '../components/layouts/Page';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { ProductsContext } from '../context/ProductsContext';
import _ from 'lodash';
import './SingleProductPage.scss';
import 'animate.css';

function SingleProductPage() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState('');

  // console.log('SINGLE PRODUCT PAGE', products);
  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));
    // const _product = _.find(products, { id: id }); // DIDN'T WORK
    setProduct(product);
    // console.log('IMG', product.images[0].name); // DIDN'T WORK
    console.log('SINGLE PRODUCT PAGE:', product);

    const img = product.images.map((img, indx) => {
      if (indx === 0) {
        console.log(img.src);
        setImage(img.src);
      }
    });
  }, [id, product, products, history]);
  return (
    <Page wide={true} pageTitle="Single Product">
      {product && (
        <Container className="">
          <Row>
            <Col sm={6} className="mx-auto">
              <Content width="w-100 h-100" cssClassNames="text-center">
                <h1 className="product-title">{product.name}</h1>
                {/* <h2>{product.images[0].name}</h2> */}
                <img
                  className="w-100 animate__animated animate__zoomIn"
                  src={image}
                  // src={product.images[0].src}
                  // src="http://localhost:10004/wp-content/uploads/2022/02/car-1.jpg"
                  alt=""
                />
              </Content>
            </Col>
            <Col sm={8} className="mx-auto">
              <Content width="w-100" cssClassNames="h-100">
                <article className="product-text-block animate__animated animate__lightSpeedInRight">
                  <h4 className="product-price font-weight-bold mb-4 float-right">
                    {product.price}
                  </h4>
                  <Button variant="outline-info" size="block">
                    ADD TO CART
                  </Button>
                  <Button variant="dark" size="block">
                    PROCEED TO CHECKOUT
                  </Button>
                  <p
                    className="product-description mt-4"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></p>
                </article>
              </Content>
            </Col>
          </Row>
        </Container>
      )}
    </Page>
  );
}

export default SingleProductPage;
