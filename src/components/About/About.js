import { Fragment, useContext, useState } from "react";
import ComponentContext from "../../store/component-context";
import Contacts from "../Contact/Contacts";
import AboutPageCarousels from "./AboutPageCarousels";

import Picture from "../../assets/pic.jpg";
import location from "../../assets/location.png";
import locationHovered from "../../assets/location-hover.png";

import classes from "./About.module.css";

const About = () => {
  const componentNameCtx = useContext(ComponentContext);
  About.displayName = "About";
  const componentIdentifier = About.displayName;
  componentNameCtx.componentNameFunction(componentIdentifier);

  const locationImg = location;
  const [isLocationHovered, setIsLocationHovered] = useState(locationImg);

  const locationHoveredHandler = () => {
    setIsLocationHovered(locationHovered);
  };

  const locationNotHoveredHandler = () => {
    setIsLocationHovered(location);
  };

  return (
    <Fragment>
      <section className={`${classes.about} ${classes.animation}`}>
        <div className={classes["about-left-content"]}>
          <h1 className={classes["about-title"]}>About me</h1>
          <div className={classes["about-description"]}>
            <p className={classes["about-parag"]}>
              I am Marvin Widjaja, currently a 4th year
              Computer Science student at{" "}
              <a href="https://mipt.ru/" target="_blank" rel="noreferrer">
                MIPT
              </a>
              .
            </p>
            <p className={classes["about-parag"]}>
              Passionate and Mission-Driven Full Stack Developer. Always 
              interested to meet new challenges and developing solutions for the best user experience
            </p>
            <br></br>
            <p className={classes["about-parag"]}>
              In my free-time, you would find me enjoying immersive games , playing the piano or just developing various machine learning projects.
            </p>
          </div>
          <div
            onMouseOver={locationHoveredHandler}
            onMouseLeave={locationNotHoveredHandler}
            className={classes["about-location"]}
          >
            <img src={isLocationHovered} alt="Location" />
            <span>Moscow, Russia</span>
          </div>
        </div>
        <div className={classes["about-right-content"]}>
          <img src={Picture}/>
        </div>
      </section>

      <Contacts />
      <AboutPageCarousels slidesPerView={1} />
    </Fragment>
  );
};

export default About;
