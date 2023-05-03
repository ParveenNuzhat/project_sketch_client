import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
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
        <h3 className="design-title">{detailService?.designName}</h3>
      </div>
      <Container>
        <div className="mt-5 pt-5">
          {detailService?.project.map((item, index) =>
            index % 2 == 0 ? (
              <div>
                <div className="project-container mb-5 pb-5">
                  <div
                    className="text-center"
                    // style={{ border: "1px solid black" }}
                  >
                    <img
                      src={item.projectImg}
                      alt=""
                      className="project-img img-fluid w-100 p-5"
                    />
                  </div>
                  <div
                    className="text-justify ps-5 ms-3"
                    // style={{ border: "1px solid black" }}
                  >
                    <h4 style={{ fontWeight: "900" }}>{item.title}</h4>
                    <p>{item.projectDetail}</p>
                    <a className="portfolio-link" href={item.projectLink}>
                      Project
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="project-container mb-5 pb-5">
                  <div
                    className="text-justify ps-5 ms-3"
                    // style={{ border: "1px solid black" }}
                  >
                    <h4 style={{ fontWeight: "900" }}>{item.title}</h4>
                    <p>{item.projectDetail}</p>
                    <a className="portfolio-link" href={item.projectLink}>
                      Project
                    </a>
                  </div>
                  <div
                    className="text-center"
                    // style={{ border: "1px solid black" }}
                  >
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
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetail;
