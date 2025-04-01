import { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
