import { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("http://localhost:3001/meals");
        const data = await response.json();
        console.log("meals:",  data);
        setMeals(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
  
    fetchMeals();
  }, []);
  

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <li key={meal.id}>
          <h3>{meal.name}</h3>
          <p>{meal.description}</p>
          <p>Hind: {meal.price} €</p>
          <img src={meal.image} alt={meal.name} width="200" />
        </li>
      ))}
    </ul>
  );
};


export default Meals;