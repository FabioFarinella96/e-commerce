import { GiLaurelsTrophy } from "react-icons/gi";

import "./index.css";

const Hero = () => {
  return (
    <div className="Hero">
      <img
        src="https://cdn.pixabay.com/photo/2018/02/02/00/35/ecommerce-3124413_960_720.png"
        alt="hero"
        className="hero-image"
      />
      <h2 className="hero-title">E-commerce of the year</h2>
      <GiLaurelsTrophy className="trophy-icon" />
    </div>
  );
};

export default Hero;
