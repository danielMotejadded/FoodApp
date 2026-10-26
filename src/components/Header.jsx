import logo from "../assets/logo.jpg";
export default function Header({ openCart }) {
  return (
    <div className="header">
      <div className="logo_box">
        <img src={logo} className="logo" /> <h1>FOODSI</h1>
      </div>
      <div className="cart_box">
        <h3 onClick={() =>openCart(true)} className="cart_h2">{`Cart(3)`}</h3>
      </div>
    </div>
  );
}
