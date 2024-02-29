import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Checkbox from "../Components/Checkbox";
import From from "../Components/From";
import Illustration from "../Components/Illustration";
import InputBox from "../Components/InputBox";
import img from "../assets/Img/sing-up.svg";
export default function SingUp() {
  return (
    <>
      <h2 className="main-title">Sing Up Today</h2>
      <div className="row">
        <div className="colum">
          <Illustration img={img} />
        </div>
        <div className="colum">
          <From>
            <InputBox type="text" placeholder="Frist Name" icon="person" />
            <InputBox type="text" placeholder="Last Name" icon="badge" />
            <InputBox type="email" placeholder="Email Address" icon="mail" />
            <InputBox type="password" placeholder="New Password" icon="lock" />
            <InputBox
              type="password"
              placeholder="Confirme Password"
              icon="thumb_up"
            />
            <Checkbox text="I agree all trems and Conditions" />
            <Button text={"Sing Up"} />
            <div className="info">
              <p>
                Already have a account please
                <Link to="/login" className="link">
                  Loing Now
                </Link>
              </p>
            </div>
          </From>
        </div>
      </div>
    </>
  );
}
