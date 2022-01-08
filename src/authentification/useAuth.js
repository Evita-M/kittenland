import { useEffect, useState } from "react";

function useAuth() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === "Eva" && password === "123") {
      const loggedUser = {
        username,
        password,
        isLogged: true,
      };

      saveUser(loggedUser);

      setIsLogged(true);
      setUser(loggedUser);
    } else {
      alert("Wrong user or password!");
    }
  };

  const logout = () => {
    setUser(null);
    setIsLogged(false);
  };

  const saveUser = (user) => {
    let data = localStorage.getItem("users");
    let users = new Array(0);

    if (data) {
      users = JSON.parse(data);

      if (
        users.filter((item) => (item.username = user.username)).length === 0
      ) {
        users = [...users, user];
        localStorage.setItem("users", JSON.stringify(users));
      }
    } else {
      users = [...users, user];
      localStorage.setItem("users", JSON.stringify(users));
    }
  };

  const getUsers = () => {
    const users = JSON.parse(localStorage.getItem("users"));

    return users;
  };

  const clearUsers = () => {
    localStorage.clear();
  };

  const readStorage = () => {
    const users = getUsers();
    console.log(users);
    if (users) {
      const user = users[0];

      if (user.isLogged) {
        setIsLogged(true);
        setUser(user);
      }
    }
  };

  useEffect(() => {
    readStorage();

    return () => {
      setIsLogged(false);
      setUser(null);
    };
  }, []);

  return {
    isLogged,
    login,
    logout,
    user,
  };
}

export default useAuth;
