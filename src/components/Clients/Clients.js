import React from "react";
import "./Clients.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Clients = () => {
  return (
    <div className="home-container">
      <Header></Header>
      <div className="my-5 pt-3 text-center text-white">
        <h2
          className="about-text text-center"
          style={{ fontSize: "50px", fontWeight: "bolder", color: "#474444" }}
        >
          Ambitious Clients
          <hr
            className="w-50 mx-auto my-0"
            // style={{ color: "rgb(246, 218, 133)" }}
            style={{ color: "rgb(111, 89, 21)" }}
          />
        </h2>
      </div>
      <div className="py-5 ImageBackgroundWrap Background-fixed">
        <div className="ImageInnerWrap">
          <div className="TextBackground"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Clients;
