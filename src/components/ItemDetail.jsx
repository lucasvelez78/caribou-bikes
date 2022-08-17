import bicycles from "../bicycles";
import Counter from "./Counter";
import { useParams, Link } from "react-router-dom";

function ItemDetail() {
  const bikeId = useParams().id;

  const bikeDetail = bicycles.find((bicycle) => bicycle.id == bikeId);

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
          <h1>{`$${bikeDetail.price}`}</h1>
        </div>
        <div className="itemView-quantity">
          <Counter inventory={bikeDetail.stock} />
        </div>
        <Link to="/cart" className="btn btn-light" id="btnAddToCart">
          Add to cart
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
