import {
  Header,
  Sidebar,
  Hero,
  StepHeader,
  MainFeature,
  Feature,
  StepContent,
  Security,
  MoneyFeature,
  Gradient,
  Footer,
} from "./components";
import Layout from "./Layout";
import {
  subscribtionsData,
  savingData,
  securityData,
  moneyData,
  step_1,
  step_2,
  step_3,
  grad_1,
  grad_2,
  footerData,
} from "./utils/constnts";

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Layout />
      <div className="container">
        <Feature />
        <MainFeature data={subscribtionsData} flip />
        <MainFeature data={savingData} />
        <StepHeader num="1" text="Create an account" />
        <StepContent data={step_1} />
        <StepHeader num="2" text="Order your card" />
        <StepContent data={step_2} />
        <StepHeader num="3" text="Save money!" />
        <StepContent data={step_3} />
        <Security data={securityData} />
        <MoneyFeature data={moneyData} />
        <div className="two-sections">
          <Gradient data={grad_1} />
          <Gradient data={grad_2} />
        </div>
      </div>
      <Footer data={footerData} />
    </>
  );
};

export default App;
