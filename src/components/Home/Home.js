import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";

import HomePicture from "../../assets/home.png";
import Button from "../UI/Button";
import Contacts from "../Contact/Contacts";
import ComponentContext from "../../store/component-context";

import classes from "./Home.module.css";

const Home = () => {
  const position = "Front-End";
  const text = "Developer";

  const navigate = useNavigate();
  const navigateToAboutHandler = () => {
    navigate("/about");
  };

  const componentNameCtx = useContext(ComponentContext);
  Home.displayName = "Home";
  const componentIdentifier = Home.displayName;
  componentNameCtx.componentNameFunction(componentIdentifier);

  return (
    <Fragment>
      <div className={`${classes.home} ${classes.animation}`}>
        <section className={classes["image-section"]}>
          <img src={HomePicture} alt="This is me!" />
        </section>
        <section className={classes.intro}>
          <div>
            Hi, I'm <span>Marvin</span>. My creativity allows me to build
            experiences & interfaces.
          </div>
          <Button onClick={navigateToAboutHandler}>About</Button>
        </section>
      </div>
      <Contacts />
    </Fragment>
  );
};

export default Home;
