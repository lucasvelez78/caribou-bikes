import { useContext, useState } from "react";
import { cartContext } from "../store/cartContext";

function Buy(props) {
  const [quantity] = useState(props.quantity);
  let subtotal = props.price * quantity;
  let ID = props.id;
  const { cart, removeFromCart } = useContext(cartContext);
  function handleDelete() {
    const itemToDelete = cart.find((item) => item.id === ID);
    removeFromCart(itemToDelete);
  }

  return (
    <div className="itemInCart">
      <div>
        <img src={props.image} alt="bicycle"></img>
      </div>
      <div className="itemDescription">
        <p className="itemInCartReference">{props.reference}</p>
        <div className="itemInCartChild">
          <p>Quantity: {quantity}</p>
        </div>
        <div className="itemInCartChild lastItemInCartChild">
          <p className="price"> ${subtotal} </p>
          <p onClick={handleDelete} className="delete">
            {" "}
            Remove{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Buy;
