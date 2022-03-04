import { useState } from "react";
import SocialMediaContactConfiguration from "./SocialMediaContactConfiguration";
import EmailCvConfiguration from "./EmailCvConfiguration";

import classes from "./Contacts.module.css";

import githubCircle from "../../assets/github-circle.png";
import githubCircleHovered from "../../assets/github-hover.png";
import email from "../../assets/email.png";
import emailHovered from "../../assets/email-hover.png";
import cv from "../../assets/cv.png";
import cvHovered from "../../assets/cv-hover.png";

import cvDocument from "../../assets/cv-document.pdf";

const Contacts = () => {
  let cvImg = cv;
  const [isCvHovered, setIsCvHovered] = useState(cvImg);
  const [isCvtextHovered, setIsCvTextHovered] = useState(false);
  const cvHoverHandler = () => {
    setIsCvHovered(cvHovered);
    setIsCvTextHovered(true);
  };
  const cvNoHoverHandler = () => {
    setIsCvHovered(cvImg);
    setIsCvTextHovered(false);
  };

  let emailImg = email;
  const [isEmailHovered, setIsEmailHovered] = useState(emailImg);
  const [isEmailtextHovered, setIsEmailTextHovered] = useState(false);
  const emailHoverHandler = () => {
    setIsEmailHovered(emailHovered);
    setIsEmailTextHovered(true);
  };
  const emailNoHoverHandler = () => {
    setIsEmailHovered(emailImg);
    setIsEmailTextHovered(false);
  };


  let githubImg = githubCircle;
  const [isGithubHovered, setIsGithubHovered] = useState(githubImg);
  const [isGithubtextHovered, setIsGithubTextHovered] = useState(false);
  const githubHoverHandler = () => {
    setIsGithubHovered(githubCircleHovered);
    setIsGithubTextHovered(true);
  };
  const githubNoHoverHandler = () => {
    setIsGithubHovered(githubImg);
    setIsGithubTextHovered(false);
  };

  return (
    <section className={classes["contacts-section"]}>
      <SocialMediaContactConfiguration
        href={"https://github.com/MarvinWidjaja/"}
        onMouseOver={githubHoverHandler}
        onMouseLeave={githubNoHoverHandler}
        isTextHovered={isGithubtextHovered}
        textHover={"text-hover"}
        src={isGithubHovered}
        socialMediaName={"Github"}
        username={"@MarvinWidjaja"}
      />
      <div className={classes["email-cv-content"]}>
        <EmailCvConfiguration
          href="mailto:marvinwidjaja159@gmail.com"
          onMouseOver={emailHoverHandler}
          onMouseLeave={emailNoHoverHandler}
          isTextHovered={isEmailtextHovered}
          src={isEmailHovered}
          title={"marvinwidjaja159@gmail.com"}
        />
        <EmailCvConfiguration
          href={cvDocument}
          onMouseOver={cvHoverHandler}
          onMouseLeave={cvNoHoverHandler}
          isTextHovered={isCvtextHovered}
          src={isCvHovered}
          title={"Download CV"}
        />
      </div>
    </section>
  );
};

export default Contacts;
