import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./PositionModal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={`${classes.tag} ${props.className}`}>
      <h4 className={classes.position}>{props.position}</h4>
      <p className={classes.text}>{props.text}</p>
    </div>
  );
};

const PositionModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay
          className={props.animationStyle}
          position={props.position}
          text={props.text}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default PositionModal;
