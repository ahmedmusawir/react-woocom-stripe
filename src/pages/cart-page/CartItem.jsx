import React from 'react';
import Content from '../../components/layouts/Content';
import { Button } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';

function CartItem({ item, addMore, addLess, removeProduct }) {
  const { name, quantity, price } = item;
  return (
    <Content
      width="w-100"
      cssClassNames="text-center container border animate__animated animate__fadeIn"
    >
      <section className="row">
        <div className="col-sm-3">
          <img className="w-100" src={item.images[0].src} alt="" />
        </div>
        <div className="col-sm-5 text-center">
          <h4 className="product-title pt-3">{name}</h4>
          <h5 className="product-price font-weight-bold">${price}</h5>
        </div>
        <div className="col-sm-4">
          <p className="font-weight-bold">Quantity: {quantity}</p>
          <Button variant="dark" size="lg" onClick={() => addMore(item)}>
            +
          </Button>

          {quantity === 1 && (
            <Button
              variant="info"
              size="lg"
              onClick={() => removeProduct(item)}
            >
              <BsTrash />
            </Button>
          )}
          {quantity > 1 && (
            <Button variant="info" size="lg" onClick={() => addLess(item)}>
              -
            </Button>
          )}
        </div>
      </section>
    </Content>
  );
}

export default CartItem;
