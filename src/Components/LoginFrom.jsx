import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import From from "../Components/From";
import InputBox from "../Components/InputBox";
import { useAuth } from "../Context/AuthContext";

export default function LoginFrom() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Faild to Login, Please try Again");
      setLoading(false);
    }
  };

  return (
    <From onSubmit={handleSubmit}>
      <InputBox
        type="email"
        placeholder="Email Address"
        icon="mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputBox
        type="password"
        placeholder="Password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" text="Login" disabled={loading} />
      {error && <p className="error">{error}</p>}
      <div className="info">
        <p>
          You don{"'"}t have any account please
          <Link to="/singUp" className="link">
            Sing Up Today
          </Link>{" "}
          ||{" "}
          <Link to="/forget" className="link">
            Forgot Password
          </Link>
        </p>
      </div>
    </From>
  );
}
