import "./index.css";
import { BsCart } from "react-icons/bs";

const Header = ({ setCartVisibility }) => {
  return (
    <div className="Header">
      <img src="/images/logoapp.png" alt="logo" className="logo" />
      <ul className="nav-bar">
        <a className="nav-bar__item" href="#">
          Home
        </a>
        <a className="nav-bar__item" href="#">
          About us
        </a>
        <a className="nav-bar__item" href="#">
          Contacts
        </a>
      </ul>
      <div className="cart" onClick={() => setCartVisibility((prev) => !prev)}>
        <p className="cart-text">Cart</p>
        <BsCart />
      </div>
    </div>
  );
};

export default Header;
