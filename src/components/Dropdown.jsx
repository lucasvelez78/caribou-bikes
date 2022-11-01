import { Link } from "react-router-dom";
import { menuContext } from "../store/menuContext";
import { useContext } from "react";

function Dropdown() {
  const { ToggleMenu, HideMenu } = useContext(menuContext);
  return (
    <ul className="Dropdown-menu">
      <Link
        className="Dropdown-link"
        to="/road"
        onClick={() => {
          HideMenu();
        }}
      >
        Road
      </Link>

      <Link
        className="Dropdown-link"
        to="/mountain"
        onClick={() => {
          HideMenu();
        }}
      >
        Mountain
      </Link>

      <Link
        className="Dropdown-link"
        to="/gravel"
        onClick={() => {
          HideMenu();
        }}
      >
        Gravel
      </Link>

      <Link
        className="Dropdown-link"
        to="/urban"
        onClick={() => {
          HideMenu();
        }}
      >
        Urban
      </Link>

      <Link
        className="Dropdown-link"
        to="/ebike"
        onClick={() => {
          ToggleMenu();
          HideMenu();
        }}
      >
        e-bike
      </Link>
    </ul>
  );
}

export default Dropdown;
