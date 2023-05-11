import React, { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import "./Service.css";

import { FaArrowRight } from "react-icons/fa";

import AOS from "aos";
import { Link } from "react-router-dom";

const Service = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { id, serviceName, img, description } = props.service;

  return (
    <div>
      <Col className="service-box">
        <Card
          className="service-card text-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Link className="design-link" to={`/serviceDetail/${id}`}>
            <Card.Body>
              <Card.Title className="service-title">
                {serviceName} <FaArrowRight />
              </Card.Title>
              <Card.Img
                variant="top"
                src={img}
                className="service-img img-fluid p-3 my-4"
              />

              <Card.Text className="px-2" style={{ color: "white" }}>
                {description.slice(0, 170)}
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
