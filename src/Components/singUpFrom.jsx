/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import From from "./From";
import InputBox from "./InputBox";

export default function singUpFrom() {
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfiremPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { singUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validation
    const username = fristName + lastName;
    if (confirmePassword !== password) {
      return setError("Password don't Match! Try again");
    }

    try {
      setError("");
      setLoading(true);
      await singUp(username, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Account Creation occuring an error!");
    }
  };

  return (
    <From onSubmit={handleSubmit}>
      <InputBox
        type="text"
        placeholder="Frist Name"
        icon="person"
        value={fristName}
        onChange={(e) => setFristName(e.target.value)}
      />
      <InputBox
        type="text"
        placeholder="Last Name"
        icon="badge"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <InputBox
        type="email"
        placeholder="Email Address"
        icon="mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputBox
        type="password"
        placeholder="New Password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputBox
        type="password"
        placeholder="Confirme Password"
        icon="thumb_up"
        value={confirmePassword}
        onChange={(e) => setConfiremPassword(e.target.value)}
      />
      <Checkbox
        text="I agree all trems and Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.checked)}
      />
      {error && <p className="error">{error}</p>}
      <Button disabled={loading} type="submit" text={"Sing Up"} />
      <div className="info">
        <p>
          Already have a account please
          <Link to="/login" className="link">
            Loing Now
          </Link>
        </p>
      </div>
    </From>
  );
}
