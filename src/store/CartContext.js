import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  clearCart: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (i) => i.id === action.item.id
    );
    let updatedItems;

    if (existingItemIndex !== -1) {
      const updatedItem = {
        ...state.items[existingItemIndex],
        quantity: state.items[existingItemIndex].quantity + 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, { ...action.item, quantity: 1 }];
    }

    const newState = { items: updatedItems };
    console.log("yaaaaay Cart updated:", newState.items);
    return newState;
  }

  if (action.type === "CLEAR_CART") {
    console.log("Cart cleared");
    return { items: [] };
  }

  return state;
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR_CART" });
  };

  const contextValue = {
    items: cartState.items,
    addItem: addItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
