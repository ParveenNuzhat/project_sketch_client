import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  // const [designs, setDesigns] = useState([]);
  // useEffect(() => {
  //   fetch("./fakeData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const designList = data.map((a) => a.designName);
  //       console.log(designList);
  //       const uniqueDesigns = [...new Set(designList)];
  //       console.log(uniqueDesigns);
  //       setDesigns(uniqueDesigns);
  //     });
  // }, []);

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    // <div>
    //   {designs.map((a) => (
    //     <div>
    //       <div className="mt-5">
    //         <div class="box me-5">
    //           <h3>{a}</h3>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="service-container">
      <Header></Header>
      <div className="service-bg">
        <h2 className="service-header">
          <span style={{ color: "white", fontSize: "20px" }}>WE OFFER</span>{" "}
          <br />
          Best Services
        </h2>
      </div>

      <div className="service-div">
        <Container
          className="service-detail mx-auto mt-5 pt-3"
          // style={{ height: "100vh" }}
        >
          <h2
            className="mx-5 text-center"
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
              color: "var(--text-color)",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            <span style={{ fontSize: "35px" }}>W</span>hat{" "}
            <span style={{ fontSize: "35px" }}>W</span>e{" "}
            <span style={{ fontSize: "35px", color: "lightgreen" }}>O</span>
            <span style={{ color: "lightgreen" }}>ffer</span>
          </h2>
          <hr className="w-50 mx-auto my-0" />

          <div className="mt-5 ">
            <p
              className=" text-center"
              style={{
                color: "white",
                fontSize: "18px",
                letterSpacing: "0.5px",
              }}
            >
              We seek a balance between art and technology, form and function,
              beauty and purpose,vision and result.We serve clients by listening
              to their concerns, understanding their goals, and sharing in their
              vision.
            </p>
            <Row
              md={3}
              className="mt-2 d-md-flex align-items-center justify-content-center gx-5 gy-5"
            >
              {services.map((service) => (
                <Service key={service.id} service={service}></Service>
              ))}
            </Row>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;
