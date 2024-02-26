import Button from "../Components/Button";
import From from "../Components/From";
import Illustration from "../Components/Illustration";
import InputBox from "../Components/InputBox";
export default function SingUp() {
  return (
    <>
      <h2 className="main-title">Sing Up Today</h2>
      <div className="row">
        <div className="colum">
          <Illustration />
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
            <Button text={"Sing Up"} />
            <div className="info">
              <p>
                Already have a account please
                <a href="./login.html" className="link">
                  Loing Now
                </a>
              </p>
            </div>
          </From>
        </div>
      </div>
    </>
  );
}
