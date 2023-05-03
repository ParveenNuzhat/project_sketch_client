import React from "react";
// import About from "../About/About";
import Banner from "../Banner/Banner";
import Design from "../Design/Design";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slogan from "../Slogan/Slogan";
import Title from "../Title/Title";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Title></Title>
      <Header></Header>
      <Banner></Banner>
      <Slogan></Slogan>
      <Design></Design>
      <Footer></Footer>
    </div>
  );
};

export default Home;
