import React, { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/UI/Modal";
import "./index.css";
import { CartContextProvider } from "./store/CartContext";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <CartContextProvider>
      <Header onCartClick={openCartHandler} />
      <main>
        <Meals />
      </main>
      <Modal open={isCartOpen} onClose={closeCartHandler}>
        <h2>Your Cart</h2>
        <p>Cart content will be shown here.</p>
      </Modal>
    </CartContextProvider>
  );
};

export default App;
