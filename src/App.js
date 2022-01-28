import { Navigate, Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import logo from "./assets/logo-kittenland.png";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import { Logo } from "./styles/styles";
import { ContainerApp, ContainerMain } from "./styles/layout";

function App() {
  const { isLogged } = useContext(AuthContext);

  return (
    <>
      <ContainerApp>
        <Logo>
          <img src={logo} alt="" width={150} height={150} />
        </Logo>
        <Menu />
        <ContainerMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route element={<PrivateRoute />}>
              <Route path="admin" element={<Admin />} />
            </Route>
            <Route
              path="login"
              element={isLogged ? <Navigate to="/admin" /> : <Login />}
            />
            <Route path="checkout" element={<Checkout />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </ContainerMain>
      </ContainerApp>
    </>
  );
}

export default App;
