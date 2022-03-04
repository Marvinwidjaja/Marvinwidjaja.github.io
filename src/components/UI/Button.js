import classes from "./Button.module.css";

const Button = (props) => {
  const btnClasses = `${classes.button} ${props.className}`;

  return (
    <button type="submit" onClick={props.onClick} className={btnClasses}>
      {props.children}
    </button>
  );
};

export default Button;
