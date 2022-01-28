import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UserMenuDefault } from "../styles/styles";
import { ContainerModal } from "../styles/layout";
import { ButtonDefault, LinkDefault } from "../styles/buttons";

const UserMenu = ({ setShowUserMenu }) => {
  const { isLogged, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <>
      <ContainerModal onClick={() => setShowUserMenu(false)} />
      <UserMenuDefault>
        {isLogged ? (
          <ButtonDefault onClick={handleLogout}>Logout</ButtonDefault>
        ) : (
          <LinkDefault
            success
            onClick={() => setShowUserMenu(false)}
            to="/login"
          >
            Login
          </LinkDefault>
        )}
      </UserMenuDefault>
    </>
  );
};

export default UserMenu;
