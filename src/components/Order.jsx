import { useContext, useState, useEffect } from "react";
import { orderContext } from "../store/orderContext";
import { doc, getDoc } from "firebase/firestore";
import firestoreDB from "../services/firebase";
import Loader from "./Loader";

function Order() {
  const { orderId } = useContext(orderContext);
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(firestoreDB, "purchaseOrders", orderId);
    getDoc(docRef).then((doc) => {
      setOrder(doc.data());
      setLoading(false);
    });
  }, [orderId]);

  if (loading) return <Loader />;

  return (
    <div className="order">
      <div className="purchase-order">
        <h1>Thanks for your purchase!</h1>
        <h3>Enjoy your ride!</h3>
        <p className="order-number">
          {" "}
          Your purchase-order number is: {orderId}
        </p>
      </div>
      <div className="buyer-info">
        <p>name: {order.buyer.name}</p>
        <p>email: {order.buyer.email}</p>
        <p>address: {order.buyer.address}</p>
      </div>
      <div className="order-content">
        {order &&
          order.items.map((item) => {
            return (
              <div className="itemInCart">
                <p className="itemInCartChild">{item.reference}</p>
                <div className="itemInCartChild">
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="itemInCartChild lastItemInCartChild">
                  <p>Unit price: ${item.price} </p>
                </div>
              </div>
            );
          })}
        <h2>Total: ${order.total}</h2>
        <p>{"(shipping: $20)"}</p>
      </div>
    </div>
  );
}

export default Order;
