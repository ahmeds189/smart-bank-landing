import "./MainFeature.scss";
import { MdDone } from "react-icons/md";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const MainFeature = ({ data, flip }) => {
  const { heading, image, feature } = data;
  return (
    <section className={`main-feature ${flip ? "flip" : null}`}>
      <div className="wrapper">
        <div className="content">
          <h2>{heading}</h2>
          <ul>
            {feature.map((item, i) => (
              <li key={i}>
                <MdDone />
                {item}
              </li>
            ))}
          </ul>
          <a href="#">
            Get started <HiOutlineArrowLongRight />
          </a>
        </div>
        <img src={image} alt="phone with our app shows instruction" />
      </div>
    </section>
  );
};

export default MainFeature;
