import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavLinksMobile from "./NavLinksMobile";
import ComponentContext from "../store/component-context";

import classes from "./Header.module.css";
import openMenu from "../assets/openMenu.png";

const Header = (props) => {
  const componentCtx = useContext(ComponentContext);

  let navigate = useNavigate();
  const homePageHandler = () => {
    if (componentCtx.componentNameVar === "Home") {
      return;
    }
    navigate("/");
  };

  return (
    <Fragment>
      <div className={`${classes.header} ${classes["header-bottom"]}`}>
        <NavLinksMobile
          homePage={props.homePage}
          aboutPage={props.aboutPage}
          portfolioPage={props.portfolioPage}
          contactPage={props.contactPage}
        />
        <div className={classes.headerTitle}>
          <h1 onClick={homePageHandler}>Marvin</h1>
        </div>
        <div className={classes.navLinks}>
          <div>
            <h3>{props.homePage}</h3>
          </div>
          <div>
            <h3>{props.aboutPage}</h3>
          </div>
          <div>
            <h3>{props.portfolioPage}</h3>
          </div>
          <div>
            <h3>{props.contactPage}</h3>
          </div>
        </div>
        <div className={classes["dropdown-btn"]}>
          <img
            src={openMenu}
            alt="navbar menu button"
            onClick={componentCtx.dropdownBtnHandler}
            className={
              componentCtx.dropdownBtnState ? classes["rotate-btn"] : ""
            }
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
