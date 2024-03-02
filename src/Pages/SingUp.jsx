import Illustration from "../Components/Illustration";
import SingUpFrom from "../Components/singUpFrom";
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
          <SingUpFrom />
        </div>
      </div>
    </>
  );
}
