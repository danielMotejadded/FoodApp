import useFetchData from "../hooks/useFetchData";

export default function FoodContainer({ addItem, items, setIsCartVisible }) {
  const { meals, mealsFetching } = useFetchData();

  return (
    <div className="main_container">
      {meals.map((meal) => (
        <div key={meal.id} className="dishTile">
          <img className="dish_img" src={meal.image} alt={meal.name} />
          <h2 className="dish_name">{meal.name}</h2>
          <p className="meal_price">${meal.price}</p>
          <p className="meal_description">{meal.description}</p>
          <button
            onClick={async () => {
              addItem((prev) => {
                if (items.find((el) => el.id === meal.id)) {
                  setIsCartVisible(true);
                  return [...prev];
                }

                const foodArray = [
                  ...prev,
                  {
                    id: meal.id,
                    name: meal.name,
                    price: meal.price,
                    quantity: 0,
                  },
                ];
                return foodArray;
              });
            }}
            className="dish_btn"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
