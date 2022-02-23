import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { isInCart } from '../../helpers/helper';
import { CartContext } from '../../context/CartContext';

function Product({ product }) {
  const { addProduct, cartItems, addMore } = useContext(CartContext);
  const inCart = isInCart(product, cartItems);

  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <figure className="img-holder">
          <Card.Img
            className="w-100"
            variant="top"
            src={product.images[0].src}
          />
        </figure>
      </Link>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="font-weight-bold">${product.price}</Card.Text>
        {!inCart && (
          <Button
            variant="dark"
            size="block"
            onClick={() => addProduct(product)}
          >
            ADD TO CART
          </Button>
        )}
        {inCart && (
          <Button variant="info" size="block" onClick={() => addMore(product)}>
            ADD MORE
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;
