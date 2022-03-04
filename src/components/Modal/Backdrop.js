import ReactDOM from "react-dom";
import { Fragment, useContext } from "react";
import ComponentContext from "../../store/component-context";

import classes from "./Backdrop.module.css";

const BackDropElement = () => {
  const componentCtx = useContext(ComponentContext);

  return (
    <div className={classes.backdrop} onClick={componentCtx.onCloseDropdown} />
  );
};

const Backdrop = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDropElement />,
        document.getElementById("backDrop-root")
      )}
    </Fragment>
  );
};

export default Backdrop;
