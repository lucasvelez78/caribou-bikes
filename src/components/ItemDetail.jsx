import Counter from "./Counter";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../store/cartContext";
import firestoreDB from "../services/firebase";
import { collection, doc, getDoc, get } from "firebase/firestore";

function getProductById(id) {
  return new Promise((resolve) => {
    const bicyclesCollectionRef = collection(firestoreDB, "bicycles");
    const docRef = doc(bicyclesCollectionRef, id);
    getDoc(docRef).then((snapshot) => {
      resolve({ ...snapshot.data(), id: snapshot.id });
    });
  });
}

function ItemDetail() {
  const [data, setData] = useState({});
  const bikeId = useParams().id;

  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    getProductById(bikeId).then((res) => {
      setData(res);
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
      </div>
    </div>
  );
}

export default ItemDetail;
