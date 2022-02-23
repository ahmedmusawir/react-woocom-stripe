export const sumItems = (cartItems) => {
  return {
    itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
    total: cartItems.reduce(
      (total, prod) => total + prod.price * prod.quantity,
      0
    ),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      //check if item is in cart
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      // console.log('CART REDUCER: CART ITEMS', state.cartItems);
      // console.log('CART REDUCER: ADD ITEM PAYLOAD', action.payload);

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

    case 'ADD_MORE':
      const increaseIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cartItems[increaseIndex].quantity++;

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

    case 'ADD_LESS':
      const decreaseIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cartItems[decreaseIndex].quantity--;

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

    case 'REMOVE_ITEM':
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      console.log('CART REDUCER: REMOVE ITEM - newCartItems', newCartItems);

      return {
        ...state,
        cartItems: [...newCartItems],
        ...sumItems([...newCartItems]),
      };
    default:
      return state;
  }
};

export default cartReducer;
