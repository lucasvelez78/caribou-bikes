import { useNavigate } from "react-router-dom";
import { logContext } from "../store/logContext";
import { useContext, useState } from "react";

function Login() {
  const [userEmail, setUserEmail] = useState({
    email: "",
  });

  let navigate = useNavigate();
  const { Log, printUser } = useContext(logContext);

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/");
    Log();
    printUser(userEmail);
  }

  function handleChange(evt) {
    const input = evt.target;
    let copyUserEmail = { ...userEmail };
    copyUserEmail[input.name] = input.value;
    setUserEmail(copyUserEmail);
  }

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Hello</h1>
          <input
            className="loginInput"
            onChange={handleChange}
            value={userEmail.email}
            name="email"
            type="e-mail"
            placeholder="e-mail"
          />
          <input
            className="loginInput"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button className="loginBtn">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
