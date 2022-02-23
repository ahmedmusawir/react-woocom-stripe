import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { BsHandbagFill } from 'react-icons/bs';
import './CartIcon.scss';

function CartIcon() {
  const { itemCount, cartItems } = useContext(CartContext);
  // console.log('BAT ICON: CART ITMES', cartItems);
  return (
    // <Link to="/cart">
    <div className="shopping-bag-holder">
      <BsHandbagFill className="shopping-bag" />
      <span className="shopping-bag-price badge rounded-pill bg-info text-light">
        {itemCount}
      </span>
    </div>
    // </Link>
  );
}

export default CartIcon;
