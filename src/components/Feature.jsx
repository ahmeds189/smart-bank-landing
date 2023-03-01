import coin from "../assets/icon-coin.svg";
import cards from "../assets/icon-cards.svg";
import bank from "../assets/icon-bank.svg";
import "./Feature.scss";

const Feature = () => {
  return (
    <section className="feature">
      <div className="wrapper">
        <div className="card">
          <div className="head-wrapper">
            <img src={coin} alt="icon contain dollar sign" />
            <h4>Easy Transactions</h4>
          </div>
          <p>
            We have an easy to understand application flow for you to use for
            transactions
          </p>
        </div>
        <div className="card">
          <div className="head-wrapper">
            <img src={bank} alt="icon contain bank door" />
            <h4>Safe and Reliable</h4>
          </div>
          <p>
            We have an easy to understand application flow for you to use for
            transactions
          </p>
        </div>
        <div className="card">
          <div className="head-wrapper">
            <img src={cards} alt="icon contain 2 credit cards" />
            <h4>Flexible Payments</h4>
          </div>
          <p>
            We have an easy to understand application flow for you to use for
            transactions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
