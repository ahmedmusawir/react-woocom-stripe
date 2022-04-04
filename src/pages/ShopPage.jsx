import React, { useContext } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col, Navbar } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { ProductsContext } from '../context/ProductsContext';
import Product from '../components/common/Product';
import { ThreeDots, Puff } from 'react-loader-spinner';
import _ from 'lodash';
import Masonry from 'react-masonry-css';
import './ShopPage.scss';
import 'animate.css';

function ShopPage() {
  const { products, isPending } = useContext(ProductsContext);
  const breakpointColumnsObj = {
    default: 2,
    1500: 2,
    1100: 1,
    700: 1,
  };

  const productItems = products.map((product) => {
    const catProd = product.categories.filter((cat) => cat.name === 'FEATURED');
    const theCat = _.map(catProd, 'name');

    if (_.first(theCat) !== 'FEATURED') {
      return (
        <Col key={product.id} className="d-flex justify-content-center">
          <Product product={product} />
        </Col>
      );
    }

    return null;
  });

  return (
    <Page wide={false} pageTitle="React Woocom" classes="shop-page pb-5 mb-5">
      <Content width="w-100 h-100" cssClassNames="text-center">
        <h1 className="product-title display-2">Shop</h1>
      </Content>
      {isPending && (
        <div className="d-flex justify-content-center">
          <Puff color="red" height={100} width={100} />
          {/* <ThreeDots color="red" height={100} width={100} /> */}
        </div>
      )}
      <Row>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid animate__animated animate__fadeIn mt-5"
          columnClassName="my-masonry-grid_column"
        >
          {productItems}
        </Masonry>
      </Row>
    </Page>
  );
}

export default ShopPage;
