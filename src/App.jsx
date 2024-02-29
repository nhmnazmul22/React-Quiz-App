import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Forgot from "./Pages/Forgot";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Question from "./Pages/Question";
import Result from "./Pages/Result";
import Singup from "./Pages/SingUp";
import "./assets/Styles/main.css";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singUp" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forgot />} />
        <Route path="/quiz" element={<Question />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Layout>
  );
}

export default App;
