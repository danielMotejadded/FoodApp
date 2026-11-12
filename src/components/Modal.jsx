import { useState } from "react";

export default function Modal({
  visible,
  setIsCartVisible,
  items,
  setIsCheckoutVisible,
}) {
  const [info, setInfo] = useState("Hmm... it's really empty here.");
  const condition = items.length <= 0;
  return (
    <div className={`modal_overlay ${visible ? "show_overlay" : ""}`}>
      <div className={`cart_modal ${visible ? "show_modal" : ""}`}>
        <h2>Your Cart</h2>

        {condition && <p> {info}</p>}

        <div className="cart_items">
          {items.map((item) => (
            <div key={item.id} className="cart_item">
              <div>
                <p>{`${item.name} -${item.quantity}x $${item.price}`}</p>
              </div>
              <div>
                <button>-</button>2<button>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart_buttons">
          <button
            onClick={() => {
              setIsCartVisible(false);
              setInfo("Hmm... it's really empty here.");
            }}
            className="close_checkout"
          >
            Close
          </button>
          <button
            onClick={() => {
              if (items.length <= 0) {
                setInfo("You need to pick at least one item :)");
                return;
              }
              setIsCartVisible(false);
              setIsCheckoutVisible(true);
            }}
            className="checkout_btn"
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
