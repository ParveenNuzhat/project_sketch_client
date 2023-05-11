import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";

import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  // console.log(serviceId);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/fakeData.JSON")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDetails(data);
      });
  }, []);

  const detailService = details?.find((ds) => ds.id == serviceId);

  // console.log(detailService);

  // const projectBg = detailService.projectBg;
  // console.log(projectBg);

  return (
    <div className="home-container">
      <Header></Header>
      <div className="design-bg">
        <h3 className="design-title">{detailService?.serviceName}</h3>
      </div>
      <Container>
        <h2
          className="text-center pt-5"
          style={{
            fontSize: "35px",
            fontWeight: "bolder",
            color: "var(--text-color)",
          }}
        >
          PROJECTS
          <hr className="w-50 mx-auto my-0" style={{ color: "black" }} />
        </h2>
        {/* <div className="mt-5 pt-5">
          {detailService?.project.map((item, index) =>
            index % 2 === 0 ? (
              <div>
                <div className="project-container mb-5 pb-5">
                  <div className="text-center">
                    <img
                      src={item.projectImg}
                      alt=""
                      className="project-img img-fluid w-100 p-5"
                    />
                  </div>
                  <div className="text-justify ps-5 ms-3">
                    <h4 style={{ fontWeight: "900" }}>{item.title}</h4>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="project-container mb-5 pb-5">
                  <div className="text-justify ps-5 ms-3">
                    <h4 style={{ fontWeight: "900" }}>{item.title}</h4>
                  </div>
                  <div className="text-center">
                    <img
                      src={item.projectImg}
                      alt=""
                      className="project-img img-fluid w-100 p-5"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div> */}
        <Row
          xs={1}
          lg={2}
          className="mx-auto my-4 pb-5 gx-5 gy-4 d-md-flex align-items-center justify-content-center"
        >
          {detailService?.project.map((item) => (
            <Gallery key={item._id} item={item}></Gallery>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetail;
