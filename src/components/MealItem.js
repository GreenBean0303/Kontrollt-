import { useContext } from "react";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={require(`../assets/${meal.image}`)} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {new Intl.NumberFormat("et-EE", {
              style: "currency",
              currency: "EUR",
            }).format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
