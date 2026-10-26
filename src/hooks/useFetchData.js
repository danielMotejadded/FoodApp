import { useEffect, useState } from "react";

export default function useFetchData() {
  const [meals, setMeals] = useState([]);
  const [mealsFetching, setMealsFetching] = useState(false);
  const fetchMeals = async () => {
    try {
      setMealsFetching(true);
      const response = await fetch(`http://localhost:3000/meals`, {
        method: "GET",
      });
      setMealsFetching(false);
      if (!response.ok) {
        throw new Error("Couldn't fetch meals");
      }
      const data = await response.json();
      setMeals(data);
    } catch (error) {
      throw new Error("Error fetching meals: ", error);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return {
    meals: meals,
    mealsFetching: mealsFetching,
  };
}
