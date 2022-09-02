import { useState } from "react";
import firestoreDB from "../services/firebase";
import { addDoc, collection } from "firebase/firestore";

function UserForm({ cart, total }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const purchaseOrder = {
    buyer: { ...userData },
    items: [...cart],
    total: total,
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    const collectionRef = collection(firestoreDB, "purchaseOrders");
    const docRef = await addDoc(collectionRef, purchaseOrder);
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
          <label forHtml="name">Name</label>
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
          <label forHtml="email">Email</label>
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
        <label forHtml="phone">Phone</label>
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
        <label forHtml="address">Address</label>
        <input
          name="address"
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="1234 Main St"
        />
      </div>
      {/* <div className="form-row" id="locationRow">
        <div className="form-group col-md-6" id="inputCity">
          <label forHtml="inputCity">City</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-4" id="inputCountry">
          <label forHtml="inputCity">Country</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-md-2">
          <label forHtml="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div> */}
      <button type="submit" className="btn" id="formButton">
        Checkout
      </button>
    </form>
  );
}

export default UserForm;
