import { useState } from "react";

export default function Modal({ visible, setIsCartVisible }) {
  console.log("visible: ", visible);
  return (
    <div className={`modal_overlay ${visible ? null : "hide"}`}>
      <div className={`cart_modal`}>
        <h2>Your Cart</h2>
        <div className="cart_items">
          <div className="cart_item">
            <div>
              <p>Seafood Paella -2x $19.99</p>
            </div>
            <div>
              <button>-</button>2<button>+</button>
            </div>
          </div>
        </div>

        <div className="cart_buttons">
          <button onClick={() => setIsCartVisible(false)} className="close_btn">
            Close
          </button>
          <button className="checkout_btn">Go to Checkout</button>
        </div>
      </div>
    </div>
  );
}
