import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomeComponent } from "./components/Home";
import Login from "./components/Login";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
