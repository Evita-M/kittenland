import { useState } from "react";

function useAuth() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const login = (username, password) => {
    if (username === "Eva" && password === "123") {
      setIsLogged(true);
      setUsername(username);
    } else {
      alert("Wrong username or password!");
    }
  };
  const logout = () => {
    setIsLogged(false);
  };

  return {
    isLogged,
    login,
    logout,
    username,
  };
}

export default useAuth;
