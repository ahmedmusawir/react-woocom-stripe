import React, { useContext } from 'react';
import Page from '../../components/layouts/Page';
import Content from '../../components/layouts/Content';
import { Row, Col } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import './CartPage.scss';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

function CartPage() {
  const {
    cartItems,
    addMore,
    addLess,
    removeProduct,
    itemCount,
    total,
    clearCart,
  } = useContext(CartContext);
  console.log('CART PAGE: cartItems', cartItems);
  console.log('CART PAGE: total', total);
  console.log('CART PAGE: itemCount', itemCount);
  return (
    <Page wide={false} pageTitle="React Woocom" classes="cart-page pb-5 mb-5">
      <Row>
        <Col sm={12}>
          <Content width="w-100" cssClassNames="text-center">
            <h1 className="display-2">Cart</h1>
          </Content>
        </Col>
      </Row>
      {cartItems.length === 0 ? (
        <Row>
          <Col sm={12}>
            <Content width="w-100" cssClassNames="text-center border">
              <h3 className="">No Item in the Cart! Keep Shopping...</h3>
              <p></p>
            </Content>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col sm={8}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addMore={addMore}
                addLess={addLess}
                removeProduct={removeProduct}
              />
            ))}
          </Col>
          <Col sm={4}>
            <CartTotal
              total={total}
              itemCount={itemCount}
              clearCart={clearCart}
            />
          </Col>
        </Row>
      )}
    </Page>
  );
}

export default CartPage;
