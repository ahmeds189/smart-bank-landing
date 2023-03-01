import "./StepHeader.scss";

const StepHeader = ({ num, text }) => {
  return (
    <section className="step">
      <p>step {num}</p>
      <h3>{text}</h3>
    </section>
  );
};

export default StepHeader;
