import "./Gradient.scss";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Gradient = ({ data }) => {
  const { heading, img, sub, bg } = data;
  return (
    <section style={{ background: bg }} className="gradient">
      <div className="one">
        <h3>{heading}</h3>
        <p>{sub}</p>
      </div>
      <div>
        <img src={img} alt="icon" />
        <a href="#">
          Get started <HiOutlineArrowLongRight />
        </a>
      </div>
    </section>
  );
};

export default Gradient;
