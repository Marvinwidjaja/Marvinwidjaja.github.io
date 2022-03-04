import classes from "./CarouselsWrapper.module.css";

const CarouselsWrapper = (props) => {
  return <div className={classes["carousels-wrapper"]}>{props.children}</div>;
};

export default CarouselsWrapper;
