import Carousel from "./Carousel";

function Category(props) {
  return (
    <div>
      <div className={props.class}>
        <div className="presentationBox">
          <h1 className="titleBox"> {props.type} </h1>
          <Carousel category={props.class} />
        </div>
      </div>
    </div>
  );
}

export default Category;
