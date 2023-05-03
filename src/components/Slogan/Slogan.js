import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Slogan.css";
import AOS from "aos";
import image from "../../Images/resort.jpg";
import logo from "../../Images/original_logo.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Slogan = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mt-5 py-4 ">
      <h2 className="slogan-text text-center">
        <i>
          <FaQuoteLeft className="quote-l mb-2" />
          <br />
          Beauty perishes in life, but is immortal in art.
          {/* <sup>
            <FaQuoteRight className="quote-r" />
          </sup> */}
        </i>
      </h2>
      <h4 className="author w-75 text-end">&mdash;Leonardo da Vinci</h4>

      <div className="mt-5 d-md-flex align-items-center justify-content-center">
        <Card
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="slogan-card1"
          style={{
            border: "none",
            width: "55%",
            boxShadow: "5px 5px 10px black",
            animationFillMode: "forwards",
          }}
        >
          <Card.Img variant="top" src={image} />
          <h6
            className="text-center pt-1"
            style={{ fontWeight: "900", color: "var(--text-color)" }}
          >
            Nandan Village Resort, 2016
          </h6>
        </Card>

        <Card
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="slogan-card2"
          style={{
            width: "40%",
            height: "43vh",
            marginLeft: "-40px",
            backgroundColor: "lightgrey",
            border: "none",
            boxShadow: "-5px -5px 10px black",
          }}
        >
          <Card.Body className="d-md-flex align-items-center justify-content-center text-center">
            <div>
              <div className="mt-3">
                <h4 className="slogan-subtext">
                  <i>A Successful Milestone</i>
                </h4>
                <h4 className="slogan-subtext">
                  <i>Of</i>
                </h4>
              </div>

              <div className="pt-2">
                <img src={logo} alt="" className="slogan-img" />
              </div>

              {/* <h3 className="slogan-p">
                <span style={{ fontSize: "55px" }}>S</span>ketch
              </h3>
              <Row className="mx-auto slogan-subtext">
                <Col md={4}>Architects</Col>
                <Col md={4}>Engineers </Col>
                <Col md={4}>Planners</Col>
              </Row>
              <p className="pt-4" style={{ color: "var(--text-color)" }}>
                <i>
                  {" "}
                  ... draw thoughts in monochrome <br /> to make yours{" "}
                  <span style={{ color: "	#FF4500", fontWeight: "900" }}>
                    colorful
                  </span>
                </i>
              </p> */}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Slogan;
