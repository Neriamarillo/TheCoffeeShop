import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  DELETE_CART,
} from "../constants/cartConstants";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      //   Search to see if item is in the cart already
      const itemExists = state.cartItems.find(
        (foundItem) => foundItem.product === item.product
      );
      if (itemExists) {
        // If item was found in cart, replace with new version if needed
        return {
          ...state,
          cartItems: state.cartItems.map((prevItem) =>
            prevItem.product === itemExists.product ? item : prevItem
          ),
        };
      } else {
        // Return current items in cart appending the new item added
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case DELETE_CART:
      return {};
    default:
      return state;
  }
};

export { cartReducer };
