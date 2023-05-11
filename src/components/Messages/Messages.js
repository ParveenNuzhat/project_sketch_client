import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import "./Messages.css";
import { useEffect } from "react";
import { useState } from "react";
// import Message from "../Message/Message";
import AOS from "aos";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("./messageData.json")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home-container">
      <Header></Header>
      <div className="message-bg">
        <h3
          className="message-text"
          // style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Messages from <br />{" "}
          <span className="msg-span ms-5">Top Management </span>
        </h3>
      </div>
      <Container>
        <Row className=" mx-auto pt-5 d-flex align-items-center justify-content-center">
          {messages.map((message, index) =>
            index % 2 === 0 ? (
              // <Message key={message.id} message={message}></Message>
              <div>
                <Col className="py-5">
                  <Row className="msg-row d-md-flex align-items-center justify-content-center">
                    <Col md={4} className="img-box text-center">
                      <img
                        src={message.img}
                        alt=""
                        className="message-img w-75 p-5 img-fluid"
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                      />
                    </Col>
                    <Col md={5} className="quote-box text-end">
                      <h3
                        className="message ps-5"
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                      >
                        {message.quote}
                      </h3>
                    </Col>
                    <Col
                      md={3}
                      className="mark-box text-center"
                      data-aos="fade-left"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                    >
                      <FaQuoteRight className="msg-colon" />
                    </Col>
                  </Row>
                  <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="w-75 mx-auto mt-5"
                    style={{ color: "#474444" }}
                  >
                    {/* {message.detail.map((item) => (
                      <p
                        className="text-justify"
                        style={{ letterSpacing: "1px" }}
                      >
                        {item}
                      </p>
                    ))} */}
                    <p
                      className="text-justify"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {message.detail}
                    </p>

                    <div className="pt-3">
                      <h5>
                        <i>
                          <b>{message.name}</b>
                        </i>
                      </h5>
                      <h6>
                        <i>{message.designation}</i>
                      </h6>
                    </div>
                  </div>
                </Col>
              </div>
            ) : (
              <div>
                <Col className="py-5">
                  <Row className="msg-row d-md-flex align-items-center justify-content-center">
                    <Col
                      md={3}
                      className="mark-box text-center"
                      data-aos="fade-right"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                    >
                      <FaQuoteLeft className="msg-colon" />
                    </Col>
                    <Col md={5} className="quote-box text-justify">
                      <h3
                        className="message pe-5"
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                      >
                        {message.quote}
                      </h3>
                    </Col>
                    <Col md={4} className="img-box text-center">
                      <img
                        src={message.img}
                        alt=""
                        className="message-img w-75 p-5 img-fluid"
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                      />
                    </Col>
                  </Row>
                  <div
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="w-75 mx-auto mt-5"
                    style={{ color: "#474444" }}
                  >
                    {/* {message.detail.map((item) => (
                      <p
                        className="text-justify"
                        style={{ letterSpacing: "1px" }}
                      >
                        {item}
                      </p>
                    ))} */}
                    <p
                      className="text-justify"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {message.detail}
                    </p>
                    <div className="pt-3">
                      <h5>
                        <i>
                          <b>{message.name}</b>
                        </i>
                      </h5>
                      <h6>
                        <i>{message.designation}</i>
                      </h6>
                    </div>
                  </div>
                </Col>
              </div>
            )
          )}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Messages;
