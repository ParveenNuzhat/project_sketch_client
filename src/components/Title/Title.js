import React from "react";
import "./Title.css";
import image from "../../Images/1.jpg";
// import logo from "../../Images/logo.jpg";
import { Typewriter } from "react-simple-typewriter";
import Header from "../Header/Header";
// import Header from "../Header/Header";

const Title = () => {
  return (
    <div>
      <div
        className="intro-container text-center"
        //   style={{ border: "5px solid green" }}
      >
        <div
          className="intro-content"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src={image}
            alt=""
            className="intro-img"
            //   style={{ border: "3px solid blue" }}
          />
        </div>
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="intro-title "
        >
          <Typewriter
            words={["Sketch ArchEA Ltd."]}
            loop={5}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={300}
          />
        </h2>
        {/* <img className="intro-title" src={logo} alt="" /> */}
      </div>
    </div>
  );
};

export default Title;
