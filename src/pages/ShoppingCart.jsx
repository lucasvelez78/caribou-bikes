import { useContext } from "react";
import { cartContext } from "../store/cartContext";
import Buy from "../components/Buy";

function ShoppingCart() {
  const { cart } = useContext(cartContext);
  function createBuy(element) {
    return (
      <Buy
        key={element.id}
        image={element.pic}
        reference={element.reference}
        price={element.price}
        quantity={element.quantity}
      />
    );
  }
  let quantityInCart = 0;
  let totalCost = 0;
  cart.map((item) => {
    quantityInCart += item.quantity;
    totalCost = totalCost + item.quantity * item.price;
  });

  return (
    <div className="shoppingCart">
      <div className="shopDetailBox" style={{ display: "flex" }}>
        <div className="itemsList">
          <h2 className="itemsListTitle">ShoppingCart</h2>
          <div>{cart.map(createBuy)}</div>
          <a className="backToShop" href="/">
            <p>← Back to shop</p>
          </a>
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
            <button className="btn" id="checkoutBtn">
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
