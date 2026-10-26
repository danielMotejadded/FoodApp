import { useState } from "react";
import FoodContainer from "./components/FoodContainer";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  return (
    <>
      <Header openCart={setIsCartVisible} />
      <Modal visible={isCartVisible} setIsCartVisible={setIsCartVisible} />
      <FoodContainer />
    </>
  );
}

export default App;
