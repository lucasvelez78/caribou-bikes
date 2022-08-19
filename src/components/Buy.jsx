function Buy(props) {
  let subtotal = props.price * props.quantity;
  return (
    <div className="itemInCart">
      <img src={props.image}></img>
      <p className="itemInCartChild">{props.reference}</p>
      <div className="itemInCartChild">
        <a href="#">-</a>
        <p>{props.quantity}</p>
        <a href="#">+</a>
      </div>
      <div className="itemInCartChild lastItemInCartChild">
        <p> ${subtotal} </p>
        <p className="delete"> x </p>
      </div>
    </div>
  );
}

export default Buy;
