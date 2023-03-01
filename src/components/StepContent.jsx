import "./StepContent.scss";
import { MdDone } from "react-icons/md";

const StepContent = ({ data }) => {
  const { heading, image, feature, icon } = data;

  return (
    <section className="step-content">
      <img
        src={image}
        alt="a phone screen with our app on it showing the steps"
      />
      <div>
        <h2>{heading}</h2>
        <ul>
          {feature.map((item, i) => (
            <li key={i}>
              <span>{icon ? <MdDone /> : i + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StepContent;
