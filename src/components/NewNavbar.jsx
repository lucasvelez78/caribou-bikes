import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import Dropdown from "./Dropdown";
import { cartContext } from "../store/cartContext";
import { logContext } from "../store/logContext";
import { menuContext } from "../store/menuContext";

function NewNavbar() {
  const { menu, burger, ToggleMenu, HideMenu, ShowMenu } =
    useContext(menuContext);
  const { log, user, logOut } = useContext(logContext);
  const { cart } = useContext(cartContext);
  let quantityInCart = 0;
  cart.map((item) => {
    return (quantityInCart += item.quantity);
  });
  return (
    <nav className="navigation-bar">
      <div className="burger">
        <MdOutlineMenu size={"2em"} onClick={() => ShowMenu()} />
      </div>
      <div className="m">
        <Link to="/">
          <img className="logo" src="images/antlers.png" alt="logo"></img>
        </Link>
      </div>

      <div>
        <ul className={burger ? "navigation-links active" : "navigation-links"}>
          <li className="navLink">
            <Link
              className="navigation-link"
              to="#"
              onClick={() => ToggleMenu()}
            >
              Bicycles{" "}
              <span>
                <MdKeyboardArrowDown />
              </span>
            </Link>
            {menu && <Dropdown />}
          </li>
          <li className="navLink">
            <Link
              className="navigation-link"
              to="/contact"
              onClick={() => HideMenu()}
            >
              Contact
            </Link>
          </li>
          <li id="name-logged" className="navLink">
            {" "}
            {!log ? (
              <Link
                className="navigation-link"
                to="/login"
                onClick={() => HideMenu()}
              >
                Log in
              </Link>
            ) : (
              <div className="log-link">
                <div className="name-logged">{user.email}</div>
                <button className="navigation-link logOut-btn" onClick={logOut}>
                  Log out
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="nav-cart">
        <Link to="/cart">
          <img
            className="cart-icon"
            src="images/cart.png"
            alt="shopping cart"
          ></img>
        </Link>

        <div className="items-in-cart">
          {quantityInCart === 0 ? null : quantityInCart}
        </div>
      </div>
    </nav>
  );
}

export default NewNavbar;
