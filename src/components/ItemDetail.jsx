import Counter from "./Counter";
import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../store/cartContext";
import firestoreDB from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

function ItemDetail() {
  const [data, setData] = useState({});
  const bikeId = useParams().id;

  const { cart, addToCart } = useContext(cartContext);

  function getProducts() {
    return new Promise((resolve) => {
      const bicyclesCollection = collection(firestoreDB, "bicycles");
      getDocs(bicyclesCollection).then((snapshot) => {
        const docsData = snapshot.docs.map((doc) => doc.data());
        resolve(docsData);
      });
    });
  }

  useEffect(() => {
    getProducts().then((res) => {
      setData(res.find((doc) => doc.id == bikeId));
    });
  }, []);

  function handleAdd(count) {
    addToCart(data, count);
  }

  return (
    <div className="itemView">
      <div className="itemView-left">
        <div className="itemView-img">
          <img src={data.pic} alt="bicycle"></img>
        </div>
      </div>
      <div className="itemView-right">
        <div className="itemView-description">
          <h1>{data.reference}</h1>
          <p>{data.description}</p>
          <p className="stock">{`We have ${data.stock} in stock`}</p>
          <h1 className="priceItemDetail">{`$${data.price}`}</h1>
        </div>
        <div className="itemView-quantity">
          <Counter inventory={data.stock} onAdd={handleAdd} />
        </div>
        {cart.length > 0 ? (
          <div className="go-to-cart">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              {" "}
              Go to cart{" "}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ItemDetail;
