import { Fragment, useContext } from "react";
import ComponentContext from "../../store/component-context";
import Contacts from "../Contact/Contacts";
import classes from "./Portfolio.module.css";

// import PortfolioPageCarousels from "./PortfolioPageCarousels";

const Portfolio = () => {
  const componentNameCtx = useContext(ComponentContext);
  Portfolio.displayName = "Portfolio";
  const componentIdentifier = Portfolio.displayName;
  componentNameCtx.componentNameFunction(componentIdentifier);

  return (
    <Fragment>
        <br></br>
        <h1 className={classes["about-title"]}>Projects</h1>
        <br></br>
        <a className={classes["about-project-title"]} href="https://github.com/Marvinwidjaja/bbc-bookstore">BBC-Bookstore</a>
        <p className={classes["about-parag"]}>An online bookstore with data parsed from several online bookstore. Made using Angular and Spring Boot</p>
        <br></br>
        <a className={classes["about-project-title"]} href="https://github.com/Marvinwidjaja/E-commerce_Parsing-Website">BBC Store</a>
        <p className={classes["about-parag"]}>A basic ecommerce store with items parsed from an online store. Made using Python and Flask Framework</p>
        <br></br>
        <a className={classes["about-project-title"]} href="https://github.com/Marvinwidjaja/Currency_Converter">Currency Converter</a>
        <p className={classes["about-parag"]}>Real-Time currency converter with conversion rates taken from online converter site. Made using Python and Flask</p>
        <br></br>
        <a className={classes["about-project-title"]} href="https://github.com/Marvinwidjaja/Transportation-Method">Transportation Problem Application</a>
        <p className={classes["about-parag"]}>An application which solves the Transportation Problem. Made using QT Creator and C++</p>

        <h1 className={classes["about-title"]}>Work Experience</h1>
        <br></br>
        <a className={classes["about-project-title"]}>Software Developer in Test(SDET) Intern at Blibli.com</a>
        <p className={classes["about-parag"]}>Develop automation testing for current and new features of Blibli.com with Selenium</p>
        <p className={classes["about-parag"]}>Perform API and UI testing for new features</p>
        <p className={classes["about-parag"]}>Participate in creating test cases and Bug Bash</p>


      <Contacts />
    </Fragment>
  );
};

export default Portfolio;
