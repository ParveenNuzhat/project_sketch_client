import React, { useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  FaAt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneSquare,
} from "react-icons/fa";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Header from "../Header/Header";

import { MessengerChat } from "react-messenger-chat-plugin";
import Footer from "../Footer/Footer";

const Contact = () => {
  // const [email, setEmail] = useState("info@sketcharchea.com");
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "testid2345",
        "template_fw5uwv4",
        formRef.current,
        "P_hzW72if7a7dixkh"
      )
      .then(
        (result) => {
          console.log("result.text");
          setDone(true);
          Swal.fire({
            icon: "success",
            title: "THANK YOU!",
            text: "I will get back to you soon.",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="home-container">
      <Header></Header>
      <Container className="mt-4 pt-3 contact-sec" id="contact">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2
            className="about-text text-center"
            style={{
              fontSize: "50px",
              fontWeight: "bolder",
              color: "#474444",
            }}
          >
            Get In Touch
            <hr
              className="w-50 mx-auto my-0"
              style={{ color: "rgb(111, 89, 21)" }}
            />
          </h2>
        </div>

        <Row
          className="contact-row mt-5 pt-3 d-md-flex justify-content-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Col md={6} className="contact-col">
            <h4
              className="contact-title text-center"
              style={{ color: "bisque" }}
            >
              Contact Details
            </h4>
            <div className="contact-info mt-5 pt-5">
              <p className="icon-bg">
                <FaPhoneSquare />
                <span
                  className="icons px-3"
                  style={{ fontSize: "20px", color: "white" }}
                >
                  0175-6538121
                </span>
              </p>
              <p className="icon-bg">
                <FaAt />
                <span
                  className="icons px-3"
                  style={{ fontSize: "20px", color: "white" }}
                >
                  info@sketcharchea.com
                </span>
              </p>
              <p className="icon-bg">
                <FaMapMarkerAlt />
                <span
                  className="icons px-3"
                  style={{ fontSize: "18px", color: "white" }}
                >
                  House: 39, Road: 06, Block: C, Niketon, Dhaka -1212
                </span>
              </p>
              {/* <p
                className="ps-5 ms-2"
                style={{ fontSize: "18px", color: "white" }}
              >
                Niketon, Dhaka -1212
              </p> */}
            </div>
          </Col>

          <Col md={6} className="form-col text-center">
            <h4 className="form-title" style={{ color: "bisque" }}>
              Feel Free to Ask Anything
            </h4>
            <form
              ref={formRef}
              className="contact-form pt-3"
              onSubmit={handleSubmit}
            >
              <input
                className="px-3 py-2 border-0 rounded"
                type="text"
                name="name"
                placeholder="Name"
              />{" "}
              <br />
              <input
                className="px-3 py-2 border-0 rounded"
                type="text"
                name="subject"
                placeholder="Subject"
              />{" "}
              <br />
              <input
                className="px-3 py-2 border-0 rounded"
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
              />{" "}
              <br />
              <textarea
                className="contact-text px-3 py-2 border-0 rounded"
                name="message"
                rows="5"
                placeholder="Write Your Message"
                required
              ></textarea>{" "}
              <br />
              <Button type="submit" className="mt-4 contact-btn border-0">
                Send
                <span className="submit-icon ms-2" style={{ color: "orange" }}>
                  <FaPaperPlane />
                </span>
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
      <MessengerChat pageId="156021579233" appId="897271991601845" />
      <Footer></Footer>
    </div>
  );
};

export default Contact;
