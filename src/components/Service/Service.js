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
  const { id, designName, img, description } = props.service;

  return (
    <div>
      <Col>
        <Card
          className="service-card text-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Link className="design-link" to={`/serviceDetail/${id}`}>
            <Card.Body>
              <Card.Title className="service-title">
                {designName} <FaArrowRight />
              </Card.Title>
              <Card.Img
                variant="top"
                src={img}
                className="service-img img-fluid"
              />

              <Card.Text style={{ color: "white" }}>
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
