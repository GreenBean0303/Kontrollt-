import logo from '../assets/logo.jpg';
import React, { useContext } from "react";
import "../index.css";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = ({ onCartClick }) => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="React Food Order App Logo" />
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button textOnly onClick={onCartClick}>
          Cart ({totalItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
