import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import { authContext } from "./contexts/AuthContextProvider";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Update from "./pages/Update";
import TemplateNav from "./components/TemplateNav";
import Shoot from "./pages/Shoot";
import Gallery from "./pages/Gallery";
import Scores from "./pages/Scores";

import "./styles/App.scss";

import theme from "./services/theme";

function App() {
  const { currentUser } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/update" element={<Update />} />
        <Route path="" element={<TemplateNav />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/shoot" element={<Shoot />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/scores" element={<Scores />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
