import "./Hero.scss";
import Button from "./Button";
import { FaGooglePlay, FaApple, FaStar } from "react-icons/fa";
import image from "../assets/image-hero.svg";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="wrapper">
        <div className="wrapper-text">
          <h2>Stress less about your money</h2>
          <p className="intro-text">
            Invest spare change, invest while you bank, earn bonus investments,
            grow your knowledge and more.
          </p>
          <div className="buttons-wrapper">
            <Button type="cta-border">
              <FaGooglePlay />
              <div>
                <p>Get it on</p>
                <h6>Google Play</h6>
              </div>
            </Button>
            <Button type="cta-border">
              <FaApple />
              <div>
                <p>Download on the</p>
                <h6>App Store</h6>
              </div>
            </Button>
          </div>
          <div className="rateing">
            <span>4.9/5.0</span>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
          </div>
        </div>
        <div className="wrapper-img">
          <img src={image} alt="2 mobile with our app on it" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
