import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    login(user, password);
    navigate("/cms");
  };

  return (
    <div className="login">
      <form className="form">
        <p className="form__item">
          <label htmlFor="user" className="input__label">
            User
          </label>
          <input
            onChange={handleUserChange}
            type="text"
            name="user"
            id="user"
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
