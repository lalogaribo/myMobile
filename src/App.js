import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
