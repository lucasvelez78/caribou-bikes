import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const input = evt.target;
    const copyUserInfo = { ...userInfo };
    copyUserInfo[input.name] = input.value;
    setUserInfo(copyUserInfo);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/");
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Your name
            <input
              className="form-input"
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your email
            <input
              className="form-input"
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              className="form-input"
              type="text"
              name="message"
              value={userInfo.message}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <button className="contact-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
