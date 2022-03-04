import classes from "./LeftComponentComponent.module.css";

import email from "../../../assets/email-blue.png";
import location from "../../../assets/location-hover.png";

const LeftComponentComponent = () => {
  return (
    <section className={classes["left-content"]}>
      <h3 className={classes["form-heading"]}>
        Hello! <span>Let's Talk.</span>
      </h3>
      <p className={classes["form-parag"]}>
        Fill in the form or{" "}
        <a href="mailto:marvinwidjaja159@gmail.com">send me an Email</a>
      </p>
      <div className={classes["email-div"]}>
        <img src={email} alt="Email" />
        <p>marvinwidjaja159@gmail.com</p>
      </div>
      <div className={classes["location-div"]}>
        <img src={location} alt="Location" />
        <p>Moscow, Russia</p>
      </div>
    </section>
  );
};

export default LeftComponentComponent;
