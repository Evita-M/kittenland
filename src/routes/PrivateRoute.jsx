import { Navigate, Outlet } from "react-router";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute() {
  const { isLogged } = useContext(AuthContext);
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
