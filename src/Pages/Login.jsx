import Illustration from "../Components/Illustration";
import LoginFrom from "../Components/LoginFrom";
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
          <LoginFrom />
        </div>
      </div>
    </>
  );
}
