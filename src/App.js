import { Navigate, Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import CMS from "./pages/CMS";
import Menu from "./components/Menu";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import logo from "./assets/logo-kittenland.png";
import { colors, Logo } from "./styles/styles";
import Checkout from "./pages/Checkout";
import { Div } from "glamorous";

function App() {
  const { isLogged } = useContext(AuthContext);

  return (
    <Div className="App">
      <Logo>
        <img src={logo} alt="" width={150} height={150} />
      </Logo>
      <Menu />
      <Div background={colors.cream} padding={15} height="100%">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route element={<PrivateRoute />}>
            <Route path="cms" element={<CMS />} />
          </Route>
          <Route
            path="login"
            element={isLogged ? <Navigate to="/cms" /> : <Login />}
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
      </Div>
    </Div>
  );
}

export default App;
