import { useContext, useState } from "react";
import { cartContext } from "../store/cartContext";

function Buy(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  let subtotal = props.price * quantity;
  let ID = props.id;
  const { cart, removeFromCart } = useContext(cartContext);
  function handleDelete() {
    const itemToDelete = cart.find((item) => item.id === ID);
    removeFromCart(itemToDelete);
  }

  return (
    <div className="itemInCart">
      <img src={props.image}></img>
      <p className="itemInCartChild">{props.reference}</p>
      <div className="itemInCartChild">
        <p>{quantity}</p>
      </div>
      <div className="itemInCartChild lastItemInCartChild">
        <p> ${subtotal} </p>
        <p onClick={handleDelete} className="delete">
          {" "}
          x{" "}
        </p>
      </div>
    </div>
  );
}

export default Buy;
