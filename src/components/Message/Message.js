import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Message.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import AOS from "aos";
import { useEffect } from "react";

const Message = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { img, quote, detail, name, designation } = props.message;
  return (
    <div>
      <Col className="py-5">
        <Row className="d-md-flex align-items-center justify-content-center">
          <Col md={4} className="text-end">
            <img
              src={img}
              alt=""
              className="message-img w-50"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </Col>
          <Col md={5} className="text-justify ps-5">
            <h3
              className="message"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              {quote}
            </h3>
          </Col>
          <Col
            md={3}
            className="text-center"
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
          className="w-75 mx-auto mt-3 text-justify"
          style={{ color: "#474444" }}
        >
          <p style={{ letterSpacing: "1px" }}>{detail}</p>
          <div className="pt-3">
            <h5>
              <i>
                <b>{name}</b>
              </i>
            </h5>
            <h6>
              <i>{designation}</i>
            </h6>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Message;
