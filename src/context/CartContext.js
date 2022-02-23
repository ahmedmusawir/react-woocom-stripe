import React, { createContext, useReducer } from 'react';
import cartReducer from '../reducer/CartReducer';

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0 };

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addProduct = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    window.scroll(0, 0);
  };
  const addMore = (product) => {
    dispatch({ type: 'ADD_MORE', payload: product });
    window.scroll(0, 0);
  };
  const addLess = (product) => {
    dispatch({ type: 'ADD_LESS', payload: product });
    // window.scroll(0, 0);
  };
  const removeProduct = (product) => {
    dispatch({ type: 'REMOVE_ITEM', payload: product });
  };
  const contextValues = {
    ...state,
    addProduct,
    removeProduct,
    addMore,
    addLess,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
