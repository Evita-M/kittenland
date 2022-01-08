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

function App() {
  const { isLogged } = useContext(AuthContext);

  return (
    <div className="App">
      <h1 className="title">KittenLand</h1>
      <Menu />
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
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
