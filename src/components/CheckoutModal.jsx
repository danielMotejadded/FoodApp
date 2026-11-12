import { startTransition, useActionState } from "react";
import { sendOrderAsync } from "../api/postOrder";

export default function CheckoutModal({
  isCheckoutVisible,
  setIsCheckoutVisible,
  cartItems,
}) {
  const validate = (object) => {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const errorsArray = [];
    if (isNullOrEmpty(object.fullName)) {
      errorsArray.push("Name not provided");
    }
    if (isNullOrEmpty(object.email)) {
      errorsArray.push("Email not provided");
    }
    if (isNullOrEmpty(object.street)) {
      errorsArray.push("Street not provided");
    }
    if (isNullOrEmpty(object.code)) {
      errorsArray.push("Code not provided");
    }
    if (isNullOrEmpty(object.city)) {
      errorsArray.push("City not provided");
    }
    return errorsArray;
  };
  function isNullOrEmpty(string) {
    return string === "" || string === null;
  }
  function isNotEmail(string) {
    return !string.includes("@");
  }
  const sendOrder = async (prevFormState, formData) => {
    const fullName = formData.get("name");
    const email = formData.get("email");
    const street = formData.get("street");
    const code = formData.get("code");
    const city = formData.get("city");

    const customer = {
      name: fullName,
      email: email,
      street: street,
      code: code,
      city: city,
    };
    const errors = validate(customer);
    if (errors.length > 0) {
      return {
        errors: errors,
        enteredValues: {
          fullName,
          email,
          street,
          code,
          city,
        },
      };
    }
    await sendOrderAsync({ order: { customer: customer, items: cartItems } });
  };
  const [formState, formAction] = useActionState(sendOrder, { errors: [] });
  console.log(cartItems);
  return (
    <div
      className={`modal_overlay ${isCheckoutVisible ? "show_overlay" : null}`}
    >
      <div
        className={`checkout_modal ${isCheckoutVisible ? "show_modal" : null}`}
      >
        <h1>Checkout</h1>
        <p>{`Total Amount: $89.85`}</p>
        <form className="form" action={formAction}>
          <div className="user_data">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              name="name"
              defaultValue={formState?.enteredValues?.fullName}
            />
            <label htmlFor="">E-mail Address</label>
            <input
              type="email"
              name="email"
              defaultValue={formState?.enteredValues?.email}
            />
            <label htmlFor="">Street</label>
            <input
              type="text"
              name="street"
              defaultValue={formState?.enteredValues?.street}
            />
          </div>
          <div className="user_address">
            <div>
              <label htmlFor="">Postal Code</label>
              <input
                type="text"
                name="code"
                defaultValue={formState?.enteredValues?.code}
              />
            </div>
            <div>
              <label htmlFor="">City</label>
              <input
                type="text"
                name="city"
                defaultValue={formState?.enteredValues?.city}
              />
            </div>
          </div>
          <div className="checkout_btns">
            <button
              type="button"
              className="close_checkout"
              onClick={() => {
                setIsCheckoutVisible(false);
              }}
            >
              Close
            </button>
            <button className="checkout_btn" onClick={() => {}}>
              Submit Order
            </button>
          </div>
        </form>
        <ul className="error_list">
          {formState?.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
