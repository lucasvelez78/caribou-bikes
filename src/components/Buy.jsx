import { useContext, useState } from "react";
import { cartContext } from "../store/cartContext";

function Buy(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  let subtotal = props.price * quantity;
  let ID = props.id;
  const { cart, removeFromCart, updateCart } = useContext(cartContext);
  function handleDelete() {
    const itemToDelete = cart.find((item) => item.id === ID);
    removeFromCart(itemToDelete);
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      cart = cart.map((item) =>
        item.id == ID ? { ...item, quantity: quantity } : item
      );
    }
    // const itemToUpdate = cart.find((item) => item.id === ID);
    // updateCart(itemToUpdate, quantity);
  }

  function handleIncrease() {
    setQuantity(quantity + 1);
    const itemToUpdate = cart.find((item) => item.id === ID);
    updateCart(itemToUpdate, quantity);
  }

  return (
    <div className="itemInCart">
      <img src={props.image}></img>
      <p className="itemInCartChild">{props.reference}</p>
      <div className="itemInCartChild">
        <a onClick={handleDecrease}>-</a>
        <p>{quantity}</p>
        <a onClick={quantity < props.stock ? handleIncrease : null}>+</a>
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
