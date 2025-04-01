import "../../src/index.css"
import Button from "./UI/Button";


const MealItem = ({ meal }) => {
    return (
      <li className="meal-item">
        <article>
        <img src={`${meal.image}`} alt={meal.name} />
          <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-price">
                {new Intl.NumberFormat("et-EE", {
                    style: "currency",
                    currency: "EUR",
                    }).format(meal.price)}  </p>

            <p className="meal-item-description">{meal.description}</p>
          </div>
          <div className="meal-item-actions">
          <Button textOnly onClick={() => console.log("Cart button pressed")}>Add to Cart</Button>
          </div>
        </article>
      </li>
    );
  };
  
  export default MealItem;
  