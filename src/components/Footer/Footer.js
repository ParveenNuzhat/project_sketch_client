import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import { BsLinkedin } from "react-icons/bs";
import {
  AiOutlineYoutube,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { FaAt, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import footer from "../../Images/original_logo.png";
import "./Footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const location = useLocation();

  return (
    <>
      <div className="footer-sec mt-5 pt-5">
        <footer className="footer" style={{ color: "white" }}>
          <div className="container">
            <div className="card footer-card ">
              <Row className="my-4 pt-1 d-md-flex align-items-center text-center">
                <Col>
                  <FaPhoneAlt className="footer-icon" />
                  <p className="footer-icon-p pt-1">0175-6538121</p>
                </Col>
                <Col>
                  <FaAt className="footer-icon" />
                  <p className="footer-icon-p pt-1">info@sketcharchea.com</p>
                </Col>
                <Col>
                  <FaMapMarkerAlt className="footer-icon" />
                  <p className="footer-icon-p pt-1">Niketon, Dhaka</p>
                </Col>
              </Row>
            </div>

            <div>
              <Row className="footer-row">
                <Col className="footer-second-div" md={3}>
                  <div>
                    <h5>Exploring</h5>
                    <span className="animate-border border-black"></span>
                  </div>
                  <img
                    src={footer}
                    alt=""
                    data-aos="zoom-in-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    className="footer-img w-50 px-4 py-2 mt-4"
                  />{" "}
                  <br />
                </Col>
                <Col md={3} className="footer-second-div footer-second-info">
                  <div>
                    <h5>Information</h5>
                    <span className="animate-border border-black"></span>
                  </div>
                  <div
                    data-aos="zoom-in-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    className="footer-list mt-3"
                  >
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                  </div>
                </Col>
                <Col md={3} className="footer-second-div footer-second-com">
                  <div>
                    <h5>Company</h5>
                    <span className="animate-border border-black"></span>
                  </div>
                  <div
                    data-aos="zoom-in-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    className="footer-list mt-3"
                  >
                    <Link to="/services">Our Services</Link>
                    <Link to="/clients">Clients</Link>
                    {/* <Link to="/blogs">Blog</Link> */}
                  </div>
                </Col>

                <Col md={3} className="footer-second-div footer-second-sub">
                  <div>
                    <h5>Subscribe</h5>
                    <span className="animate-border border-black"></span>
                  </div>
                  <div
                    data-aos="zoom-in-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                  >
                    <form action="" className="subscribe-form-footer">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Email address"
                        className="subscribe-field ps-3"
                      />
                      <button type="submit" className="subscribe-btn">
                        <FaPaperPlane className="footer-icon" />
                      </button>
                    </form>
                  </div>
                  <p className="mt-2 ps-2">
                    Get digital updates in your mailbox
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <div className="copyright">
            <div className="container">
              <div className="row align-items-center text-center">
                <div className="col-md-6" style={{ color: "white" }}>
                  <span>
                    &copy;{" "}
                    <span style={{ color: "cyan" }}>
                      Copyright - Sketch ArchEA Ltd. | Web-developer, Nuzhat
                      Parveen
                    </span>{" "}
                    {/* | All rights reserved */}
                  </span>
                </div>

                <div className="col-md-6">
                  <div className="social-icons d-flex justify-content-center">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/SketchArchEALtd"
                      className="social_bg facebook-bg"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/sketch-archea-ltd/"
                      className="social_bg linkedin-bg"
                    >
                      <BsLinkedin />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/sketcharchealtd/"
                      className="social_bg instagram-bg"
                    >
                      <FaInstagramSquare />
                    </a>
                    {/* <a
                      href="https://youtube.com"
                      className="social_bg youtube-bg"
                    >
                      <AiOutlineYoutube />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* <a
            style={{ marginLeft: "100%" }}
            className="fixed-bottom d-flex flex-row-reverse me-3"
            href="#"
          >
            <img
              style={{ width: "60px" }}
              src="https://www.animatedimages.org/data/media/111/animated-arrow-image-0142.gif"
              alt="Go to top"
            />
          </a> */}
      </div>
    </>
  );
};

export default Footer;
