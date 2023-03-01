import classes from "./Button.module.scss";

const Button = ({ children, type }) => {
  return (
    <button type="button" className={classes[type]}>
      {children}
    </button>
  );
};

export default Button;
