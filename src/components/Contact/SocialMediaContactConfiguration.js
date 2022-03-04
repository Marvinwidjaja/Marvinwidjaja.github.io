import { Fragment } from "react";
import classes from "./SocialMediaContactConfiguration.module.css";

const SocialMediaContactConfiguration = (props) => {
  return (
    <Fragment>
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseLeave}
        className={`${classes.link} ${
          props.isTextHovered && classes[props.textHover]
        }`}
      >
        <div className={classes["contacts-image"]}>
          <img src={props.src} alt="Social media link" />
        </div>
        <div className={classes["contacts-text"]}>
          <h3>{props.socialMediaName}</h3>
          <p>{props.username}</p>
        </div>
      </a>
    </Fragment>
  );
};

export default SocialMediaContactConfiguration;
