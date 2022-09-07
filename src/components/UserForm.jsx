import { useState, useContext } from "react";
import firestoreDB from "../services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { orderContext } from "../store/orderContext";
import { cartContext } from "../store/cartContext";

function UserForm({ inCart, total }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const purchaseOrder = {
    buyer: { ...userData },
    items: [...inCart],
    total: total,
    date: new Date(),
  };

  let navigate = useNavigate();
  const { loadOrderId } = useContext(orderContext);
  const { clearCart } = useContext(cartContext);

  async function handleSubmit(evt) {
    evt.preventDefault();
    const collectionRef = collection(firestoreDB, "purchaseOrders");
    const docRef = await addDoc(collectionRef, purchaseOrder);
    loadOrderId(docRef.id);
    navigate("/success");
    clearCart();
  }

  function handleChange(evt) {
    const input = evt.target;
    let copyUserData = { ...userData };
    copyUserData[input.name] = input.value;
    setUserData(copyUserData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row" id="firstRow">
        <div className="form-group col-md-6" id="buyerName">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={userData.name}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="name"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
            type="email"
            className="form-control"
            id="inputPassword4"
            placeholder="email"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="+1234"
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          name="address"
          value={userData.address}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="1234 Main St"
        />
      </div>
      <button type="submit" className="btn" id="formButton">
        Checkout
      </button>
    </form>
  );
}

export default UserForm;
