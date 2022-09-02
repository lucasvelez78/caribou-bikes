import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../store/cartContext";
import Buy from "../components/Buy";
import UserForm from "../components/UserForm";

function ShoppingCart() {
  const { cart } = useContext(cartContext);
  const [activeForm, setActiveForm] = useState(false);

  function createBuy(element) {
    return (
      <Buy
        key={element.id}
        id={element.id}
        image={element.pic}
        reference={element.reference}
        price={element.price}
        quantity={element.quantity}
        stock={element.stock}
      />
    );
  }

  let quantityInCart = 0;
  let totalCost = 0;
  cart.map((item) => {
    quantityInCart += item.quantity;
    totalCost = totalCost + item.quantity * item.price;
  });

  function handleClick() {
    setActiveForm(true);
  }

  return (
    <div className="shoppingCart">
      <div className="shopDetailBox" style={{ display: "flex" }}>
        <div className="itemsList">
          <h2 className="itemsListTitle">ShoppingCart</h2>
          <div>{cart.map(createBuy)}</div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="backToShop">← Back to shop</p>
          </Link>
        </div>
        <div className="summary">
          <h5>Summary</h5>
          <hr />
          <div className="summary-detail">
            <div> items: {quantityInCart} </div>
            <div className="costSummary"> ${totalCost} </div>
          </div>
          <div className="summary-detail">
            <div> Shipping: </div>
            <div className="costSumary"> $20 </div>
          </div>
          <div className="summary-detail totalPriceBox">
            <div> TOTAL PRICE: </div>
            <div className="costSummary totalPrice"> ${totalCost + 20} </div>
          </div>
          <div className="checkOutBoxBtn">
            <button className="btn" id="checkoutBtn" onClick={handleClick}>
              Buy
            </button>
          </div>
        </div>
      </div>
      {activeForm && (
        <div className="user-form">
          <UserForm cart={cart} total={totalCost + 20} />
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
