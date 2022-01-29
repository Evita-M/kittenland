import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UserMenuDefault } from "../styles/styles";
import { ButtonDefault, LinkDefault } from "../styles/buttons";

const UserMenu = ({ setShowUserMenu }) => {
  const { isLogged, logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout(user.username);
    setShowUserMenu(false);
  };

  return (
    <UserMenuDefault>
      {isLogged ? (
        <ButtonDefault onClick={handleLogout}>Logout</ButtonDefault>
      ) : (
        <LinkDefault success onClick={() => setShowUserMenu(false)} to="/login">
          Login
        </LinkDefault>
      )}
    </UserMenuDefault>
  );
};

export default UserMenu;
