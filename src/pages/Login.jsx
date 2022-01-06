import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    navigate("/cms");
  };

  return (
    <div className="login">
      <form className="form">
        <p className="form__item">
          <label htmlFor="username" className="input__label">
            Username
          </label>
          <input
            onChange={handleUsernameChange}
            type="text"
            name="username"
            id="username"
          />
        </p>
        <p className="form__item">
          <label htmlFor="password" className="input__label">
            Password
          </label>
          <input
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
          />{" "}
        </p>
        <p className="form__item">
          <button onClick={handleOnSubmit} type="submit">
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
