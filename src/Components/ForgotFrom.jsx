import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Button from "./Button";
import From from "./From";
import InputBox from "./InputBox";

export default function ForgotFrom() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { forgotPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await forgotPassword(email);
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError("Somethig went wrong! Please Try again");
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
      <Button text="Send" type="submit" disabled={loading} />
      {error && <p className="error">{error}</p>}
      <div className="info">
        <p>Please Check Your Mail for New Password</p>
      </div>
    </From>
  );
}
