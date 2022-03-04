import { Fragment } from "react";
import classes from "./EmailCvConfiguration.module.css";

const EmailCvConfiguration = (props) => {
  return (
    <Fragment>
      <a href={props.href} target="_blank" rel="noreferrer">
        <div
          onMouseOver={props.onMouseOver}
          onMouseLeave={props.onMouseLeave}
          className={`${classes["email-cv"]} ${
            props.isTextHovered && classes["text-hover"]
          }`}
        >
          <img src={props.src} alt="Email address" />
          <p>{props.title}</p>
        </div>
      </a>
    </Fragment>
  );
};

export default EmailCvConfiguration;
