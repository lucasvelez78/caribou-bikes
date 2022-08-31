import ItemList from "./ItemList";

function Category(props) {
  return (
    <div>
      <div className={props.class}>
        <div className="presentationBox">
          <h1 className="titleBox"> {props.type} </h1>
          <ItemList category={props.class} />
        </div>
      </div>
    </div>
  );
}

export default Category;
