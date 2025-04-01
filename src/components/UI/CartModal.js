import { useContext } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import "../index.css";

const CartModal = ({ open, onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const checkoutHandler = () => {
    alert("Aitäh tellimuse eest!");
    cartCtx.clearCart();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h2>Tellimuskaart</h2>

      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id} className="cart-item">
            <p>
              <b>{item.name}</b> × {item.quantity}
            </p>
            <p>
              {new Intl.NumberFormat("et-EE", {
                style: "currency",
                currency: "EUR",
              }).format(item.price * item.quantity)}
            </p>
          </li>
        ))}
      </ul>

      <p className="cart-total">
        Kokku:{" "}
        {new Intl.NumberFormat("et-EE", {
          style: "currency",
          currency: "EUR",
        }).format(totalAmount)}
      </p>

      <div className="modal-actions">
        <Button onClick={onClose}>Close</Button>
        <Button onClick={checkoutHandler}>Checkout</Button>
      </div>
    </Modal>
  );
};

export default CartModal;
