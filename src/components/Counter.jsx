import { useState } from "react";

function Counter(props) {
  const stock = props.inventory;
  const [count, setCount] = useState(1);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="counter">
      <button onClick={decrease} className="btnCounter">
        {" "}
        -{" "}
      </button>
      <h4 className="counterVisual"> {count} </h4>
      <button onClick={count < stock ? increase : null} className="btnCounter">
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default Counter;
