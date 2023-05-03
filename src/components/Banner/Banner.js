import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import image1 from "../../Images/banner_4.jpg";
import image2 from "../../Images/banner_7.jpg";
import image3 from "../../Images/banner_3.jpg";
import { Card } from "react-bootstrap";

const Banner = () => {
  return (
    <Card className="banner-container d-md-flex align-items-center justify-content-center ">
      <Carousel variant="light">
        <Carousel.Item>
          <Card.Img
            className="carousel-img d-block m-auto img-fluid"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="caption mx-0">
            <div>
              <h4 className="cover-title">Sketch Your Dreams!</h4>
              <p className="cover-para">We will shape it into reality.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Card.Img
            className="carousel-img d-block m-auto img-fluid"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption className="caption mx-0">
            <div>
              <h4 className="cover-title">
                It's the little details <br /> that matter~
              </h4>
              <p className="cover-para"></p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Card.Img
            className="carousel-img d-block m-auto img-fluid"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className="caption mx-0">
            <div>
              <h3 className="cover-title">
                We always deliver the best <br />
                for our clients
              </h3>
              <p className="cover-para"></p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Card>
  );
};

export default Banner;
