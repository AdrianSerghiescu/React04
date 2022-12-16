import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Log in" element={<Login />} />
        <Route path="Sign up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
