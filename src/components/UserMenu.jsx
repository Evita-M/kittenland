import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ButtonDefault, LinkDefault, UserMenuDefault } from "../styles/styles";

const UserMenu = ({ setShowUserMenu }) => {
  const { isLogged, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <>
      <UserMenuDefault>
        {isLogged ? (
          <ButtonDefault onClick={handleLogout}>Logout</ButtonDefault>
        ) : (
          <LinkDefault onClick={() => setShowUserMenu(false)} to="/login">
            Login
          </LinkDefault>
        )}
      </UserMenuDefault>
    </>
  );
};

export default UserMenu;
