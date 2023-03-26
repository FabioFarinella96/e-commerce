import "./index.css";
import { ImCheckboxChecked } from "react-icons/im";

const PopUp = () => {
  return (
    <div className="PopUp">
      <ImCheckboxChecked className="popUp-icon" />
      <div className="popUp-content">
        <h3 className="popUp-text">Awesome, product added to cart!</h3>
      </div>
    </div>
  );
};

export default PopUp;
