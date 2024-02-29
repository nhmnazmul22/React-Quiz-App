import { Link } from "react-router-dom";
import Button from "../Components/Button";
import From from "../Components/From";
import Illustration from "../Components/Illustration";
import InputBox from "../Components/InputBox";
import img from "../assets/Img/login.svg";

export default function Login() {
  return (
    <>
      <h2 className="main-title">Login Now</h2>
      <div className="row">
        <div className="colum">
          <Illustration img={img} />
        </div>
        <div className="colum">
          <From>
            <InputBox type="email" placeholder="Email Address" icon="mail" />
            <InputBox type="password" placeholder="Password" icon="lock" />
            <Button text="Login" />
            <div className="info">
              <p>
                You dont have any account please
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
        </div>
      </div>
    </>
  );
}
