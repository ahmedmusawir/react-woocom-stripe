import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import Page from '../components/layouts/Page';
import { Row, Col, Container, Button, Navbar } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { ProductsContext } from '../context/ProductsContext';
import { CartContext } from '../context/CartContext';
import { isInCart } from '../helpers/helper';
import { getData } from '../services/HttpService';
import _ from 'lodash';
import './SingleProductPage.scss';
import 'animate.css';

function SingleProductPage() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState('');

  const { addProduct, cartItems, addMore } = useContext(CartContext);
  const inCart = isInCart(product, cartItems);

  useEffect(() => {
    // window.scrollTo(0, 0);
    const prod = products.find((item) => Number(item.id) === Number(id));

    if (prod === undefined) {
      const getSingleProduct = async () => {
        const singleProductUrl = `products/${id}`;
        const singleProduct = await getData(singleProductUrl);

        setProduct(singleProduct.data);
        // console.log('SINGLE PRODUCT PAGE: SINGLE PRODUCT', singleProduct.data);
      };

      getSingleProduct();
      console.log('SINGLE PRODUCT PAGE: SINGLE PRODUCT', product);
    } else {
      setProduct(prod);
      // console.log('SINGLE PRODUCT PAGE: SINGLE PRODUCT', product);
      const mainImg = _.first(prod.images);
      setImage(mainImg.src);
      // console.log('SINGLE PROD: IMG W LODASH - _.first', mainImg.src);
    }
  }, [id, product, products, history]);

  // console.log('SINGLE PAGE: ITEM COUNT', itemCount);

  return (
    <Page wide={true} pageTitle="Single Product" classes="single-product-page">
      {product && (
        <Container className="">
          <Row>
            <Col sm={12} md={9} lg={7} className="mx-auto">
              <Content width="w-100 h-100" cssClassNames="text-center">
                <h1 className="product-title">{product.name}</h1>
                <img
                  className="w-100 animate__animated animate__zoomIn"
                  src={image}
                  alt=""
                />
              </Content>
            </Col>
            <Col sm={12} md={9} lg={7} className="mx-auto">
              <Content width="w-100" cssClassNames="h-100">
                <article className="product-text-block animate__animated animate__lightSpeedInRight">
                  <h4 className="product-price font-weight-bold mb-4 float-right">
                    ${product.price}
                  </h4>

                  {!inCart && (
                    <Button
                      variant="outline-info"
                      size="block"
                      onClick={() => addProduct(product)}
                    >
                      ADD TO CART
                    </Button>
                  )}
                  {inCart && (
                    <Button
                      variant="info"
                      size="block"
                      onClick={() => addMore(product)}
                    >
                      ADD MORE
                    </Button>
                  )}
                  <Link to="/checkout">
                    <Button variant="dark" size="block" className="mt-2">
                      PROCEED TO CHECKOUT
                    </Button>
                  </Link>
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
