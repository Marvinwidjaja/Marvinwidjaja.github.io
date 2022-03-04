import classes from "./SocialMediaFooter.module.css";

import github from "../assets/github.png";

const SocialMediaFooter = () => {
  return (
    <section className={classes["content-left"]}>
      <h4 className={classes["footer-title"]}>Marvin</h4>
      <div className={classes["social-media"]}>
        <div className={classes.github}>
          <a
            href="https://github.com/MarvinWidjaja/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaFooter;
