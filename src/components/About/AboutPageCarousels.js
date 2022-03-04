import CarouselsWrapper from "../Carousel/CarouselsWrapper";
import Carousel from "../Carousel/Carousel";

import classes from "./AboutPageCarousels.module.css";

import teamwork from "../../assets/carousel-imgs/teamwork.jpg";
import resultsOrientation from "../../assets/carousel-imgs/results-orientation.jpg";
import timeManagement from "../../assets/carousel-imgs/time-management.webp";
import problemSolving from "../../assets/carousel-imgs/problem-solving.jpg";

import frontend from "../../assets/carousel-imgs/frontend.jpg";
import backend from "../../assets/carousel-imgs/backend.jpg";
import languages from "../../assets/carousel-imgs/languages.jpg";

const skillsArr = [
  {
    id: "i1",
    img: teamwork,
    title: "Teamwork",
    parag:
      "I'm able to work well in a team, collaborating with my colleagues to achieve our goals.",
  },
  {
    id: "i2",
    img: resultsOrientation,
    title: "Results Orientation",
    parag:
      "Constantly focused on the goals. I'm used to work under pressure and getting the work done to meet deadlines.",
  },
  {
    id: "i3",
    img: timeManagement,
    title: "Time Management",
    parag:
      "Very good at managing my time between work, studies and other activities as I have been able to manage my time well since high school.",
  },
  {
    id: "i4",
    img: problemSolving,
    title: "Problem Solving",
    parag:
      "Always dedicated to solving problems no matter how much time it takes to get solved.",
  },
];

const experienceArr = [
  {
    id: "i1",
    img: frontend,
    title: "Frontend Development",
    parag:
      "I have several years of experience in HTML,CSS, Angular and React JS during the time of developing my projects",
  },
  {
    id: "i2",
    img: backend,
    title: "Backend Development",
    parag:
      "I have experience in Python and Java frameworks such as Flask, Django and Spring",
  },
  {
    id: "i3",
    img: languages,
    title: "Multilingual",
    parag:
      "And guess what? I'm multilingual person since I speak four languages: English, Indonesian, Mandarin and Russian.",
  },
];

const AboutPageCarousels = (props) => {
  return (
    <section className={classes["carousels-section"]}>
      <h3>A brief of my skills & experience</h3>
      <CarouselsWrapper>
        <Carousel
          carouselArr={skillsArr}
          slidesPerView={props.slidesPerView}
        ></Carousel>
        <Carousel
          carouselArr={experienceArr}
          slidesPerView={props.slidesPerView}
        ></Carousel>
      </CarouselsWrapper>
    </section>
  );
};

export default AboutPageCarousels;
