import { Div } from "glamorous";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { v4 as uuidv4 } from "uuid";

import {
  FormDefault,
  FormItemDefault,
  InputDefault,
  Intro,
  LabelDefault,
} from "../styles/styles";

import { ButtonDefault } from "../styles/buttons";

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
    login(user, password, uuidv4());
    navigate("/admin");
  };

  return (
    <Div maxWidth="400px" margin="0 auto">
      <Intro>Login to your account</Intro>
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
          />
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
