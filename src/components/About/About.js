import React, { useState } from "react";
import "./About.css";
import "animate.css";
import image from "../../Images/about.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="about-container">
      <Header></Header>
      <div className="mt-5" id="about">
        <div>
          <h2
            className="about-text text-center mt-2"
            style={{
              fontSize: "50px",
              fontWeight: "bolder",
              color: "#474444",
            }}
          >
            Company Profile
            <hr
              className="w-50 mx-auto my-0"
              style={{ color: "rgb(111, 89, 21)" }}
            />
          </h2>

          <Container>
            <Row className="d-md-flex align-items-center justify-content-center">
              <Col md={6} className="text-center">
                <img src={image} alt="" className="w-75" />
              </Col>
              <Col md={6} className="text-justify">
                <p
                  className="w-75 mx-5"
                  style={{
                    fontSize: "16px",
                    color: "#474444",
                    letterSpacing: "1px",
                  }}
                >
                  Over Nine years of service experiences with excellence in
                  Architectural design, drawing and civil constructions have
                  already brightened the name, SKETCH, in the market. We are
                  grateful to our clients for extending Support and cooperation
                  and also for offering us opportunities to serve entities both
                  in private sectors. We express our determination to remain
                  with our existing and prospective clients at the right time
                  and the right place. We proudly ensure our presence as a
                  contributor than a more service provider when our customer
                  badly requires someone to support fulfilling their
                  organizational goals.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
