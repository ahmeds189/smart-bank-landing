import "./MoneyFeature.scss";

const MoneyFeature = ({ data }) => {
  const { heading, feature, image } = data;
  return (
    <section className="money">
      <div className="wrapper">
        <div className="content">
          <h2>{heading}</h2>
          <ul>
            {feature.map((item) => (
              <li key={item.id}>
                <img src={item.icon} alt="icon descripe" />
                <h4>{item.sub}</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <img src={image} alt="wallet icon" />
      </div>
    </section>
  );
};

export default MoneyFeature;
