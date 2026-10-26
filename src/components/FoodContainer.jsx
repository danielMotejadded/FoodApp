import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";

export default function FoodContainer() {
  const { meals, mealsFetching } = useFetchData();

  console.log(meals);
  return (
    <div className="main_container">
      {meals.map((meal) => (
        <div key={meal.id} className="dishTile">
          <img className="dish_img" src={meal.image} alt={meal.name} />
          <h2 className="dish_name">{meal.name}</h2>
          <p className="meal_price">${meal.price}</p>
          <p className="meal_description">{meal.description}</p>
          <button className="dish_btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
