import { Div } from "glamorous";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import {
  ButtonDefault,
  FormDefault,
  FormItemDefault,
  InputDefault,
  LabelDefault,
} from "../styles/styles";

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
    navigate("/admin");
  };

  return (
    <Div maxWidth="400px" margin="0 auto">
      <FormDefault>
        <FormItemDefault>
          <LabelDefault htmlFor="user">User</LabelDefault>
          <InputDefault
            onChange={handleUserChange}
            type="text"
            name="user"
            id="user"
          />
        </FormItemDefault>
        <FormItemDefault>
          <LabelDefault htmlFor="password">Password</LabelDefault>
          <InputDefault
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
          />{" "}
        </FormItemDefault>

        <ButtonDefault
          css={{ width: "100%" }}
          onClick={handleOnSubmit}
          type="submit"
        >
          Login
        </ButtonDefault>
      </FormDefault>
    </Div>
  );
};

export default Login;
