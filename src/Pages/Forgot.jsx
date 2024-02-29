import Button from "../Components/Button";
import From from "../Components/From";
import Illustration from "../Components/Illustration";
import InputBox from "../Components/InputBox";
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
          <From>
            <InputBox type="email" placeholder="Email Address" icon="mail" />
            <InputBox type="text" placeholder="OTP" icon="lock" />
            <Button text="Send" />
            <div className="info">
              <p>Please Check Your Mail for OTP Code</p>
            </div>
          </From>
        </div>
      </div>
    </>
  );
}
