import { useState } from "react";
import FoodContainer from "./components/FoodContainer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import CheckoutModal from "./components/CheckoutModal";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header itemsQuantity={cartItems.length} openCart={setIsCartVisible} />
      <Modal
        items={cartItems}
        visible={isCartVisible}
        setIsCartVisible={setIsCartVisible}
        setIsCheckoutVisible={setIsCheckoutVisible}
      />
      {isCheckoutVisible && (
        <CheckoutModal
          cartItems={cartItems}
          isCheckoutVisible={isCheckoutVisible}
          setIsCheckoutVisible={setIsCheckoutVisible}
        />
      )}
      <FoodContainer
        setIsCartVisible={setIsCartVisible}
        items={cartItems}
        addItem={setCartItems}
      />
    </>
  );
}

export default App;
