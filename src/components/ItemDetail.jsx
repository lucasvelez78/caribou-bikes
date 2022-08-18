import bicycles from "../bicycles";
import Counter from "./Counter";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../store/cartContext";

function ItemDetail() {
  const bikeId = useParams().id;

  const bikeDetail = bicycles.find((bicycle) => bicycle.id == bikeId);

  const { addToCart } = useContext(cartContext);

  function handleAdd(quantity) {
    addToCart(bikeDetail, quantity);
  }

  return (
    <div className="itemView">
      <div className="itemView-left">
        <div className="itemView-img">
          <img src={bikeDetail.pic} alt="bicycle"></img>
        </div>
      </div>
      <div className="itemView-right">
        <div className="itemView-description">
          <h1>{bikeDetail.reference}</h1>
          <p>{bikeDetail.description}</p>
          <p className="stock">{`We have ${bikeDetail.stock} in stock`}</p>
          <h1 className="priceItemDetail">{`$${bikeDetail.price}`}</h1>
        </div>
        <div className="itemView-quantity">
          <Counter inventory={bikeDetail.stock} onAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
