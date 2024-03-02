import ForgotFrom from "../Components/ForgotFrom";
import Illustration from "../Components/Illustration";
import img from "../assets/Img/Qustion.svg";

export default function Login() {
  return (
    <>
      <h2 className="main-title">Login Now</h2>
      <div className="row">
        <div className="colum">
          <Illustration img={img} />
        </div>
        <div className="colum">
          <ForgotFrom />
        </div>
      </div>
    </>
  );
}
