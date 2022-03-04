import Button from "../../UI/Button";

import classes from "./FormSent.module.css";
import formSent from "../../../assets/form-sent.png";

const FormSent = (props) => {
  return (
    <section
      className={`${classes["form-sent"]} ${
        props.isSentIconHidden ? props.hideClass : ""
      }`}
    >
      <img src={formSent} alt="Form is Sent" />
      <h3>I'll reply to you very soon!</h3>
      <div className={classes["form-sent-btn"]}>
        <Button onClick={props.showForm}>Another emessage?</Button>
      </div>
    </section>
  );
};

export default FormSent;
