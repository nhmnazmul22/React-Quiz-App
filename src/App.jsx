import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import { AuthProvider } from "./Context/AuthContext";
import Forgot from "./Pages/Forgot";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Question from "./Pages/Question";
import Result from "./Pages/Result";
import Singup from "./Pages/SingUp";
import PrivateOutlet from "./Routes/privateOutlet";
import PublicOutlet from "./Routes/publicOutlet";
import "./assets/Styles/main.css";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PublicOutlet />}>
            <Route path="/singUp" element={<Singup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget" element={<Forgot />} />
          </Route>
          <Route path="/" element={<PrivateOutlet />}>
            <Route path="/quiz/:id" element={<Question />} />
            <Route path="/result/:id" element={<Result />} />
          </Route>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}
export default App;
