import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card" style={{ width: "15rem", height: "22rem" }}>
      <div className="cardImg">
        <img src={props.img} className="card-img-top" alt="bike picture" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.reference}</h5>
        <h2 className="card-text">{`$${props.price}`}</h2>
        <Link to={`/${props.id}`} className="btn btn-light" id="cardBtn">
          See more
        </Link>
      </div>
    </div>
  );
}

export default Card;
