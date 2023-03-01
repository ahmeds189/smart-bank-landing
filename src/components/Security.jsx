import "./Security.scss";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Security = ({ data }) => {
  const { heading, sub, image } = data;
  return (
    <section className="security">
      <div>
        <h2>{heading}</h2>
        <p>{sub}</p>
        <a href="#">
          Get started <HiOutlineArrowLongRight />
        </a>
      </div>
      <img src={image} alt="" />
    </section>
  );
};

export default Security;
