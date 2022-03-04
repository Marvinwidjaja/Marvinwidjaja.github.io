import classes from "./Footer.module.css";
import SocialMediaFooter from "./SocialMediaFooter";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <SocialMediaFooter />
      <section className={classes["content-right"]}>
        <h4>
          Made using
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React
          </a>
        </h4>
      </section>
    </div>
  );
};

export default Footer;
