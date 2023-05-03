import React, { useEffect, useState } from "react";
import "./Design.css";
import "animate.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import AOS from "aos";
import { Card, Col, Container, Row } from "react-bootstrap";

const slideItems = [
  {
    imgSrc: "https://i.ibb.co/NFjcbKS/resort.jpg",
  },
  {
    imgSrc: "https://i.ibb.co/f1rG7DM/gallery-2.jpg",
  },
  {
    imgSrc: "https://i.ibb.co/7tS5NB7/gallery-3.jpg",
  },
  {
    imgSrc: "https://i.ibb.co/BnbG98V/banner-2.jpg",
  },
  {
    imgSrc: "https://i.ibb.co/yfwrnSM/kitchen.jpg",
  },
  {
    imgSrc: "https://i.ibb.co/drR2j1t/banner-5.jpg",
  },
];

const Design = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="mt-5 pt-5">
      <div className="sketch-container mt-5 mb-5">
        <Container>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <Row className="w-100 mx-auto d-md-flex align-items-center justify-content-center text-center">
              <Col md={4}>
                <Card
                  data-aos="flip-down"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                  className="about-card  mx-auto d-md-flex justify-content-center"
                  style={{ minHeight: "150px" }}
                >
                  <h1 className="count-up-text">
                    {counterOn && <CountUp end={10} duration={2}></CountUp>}+
                  </h1>
                  <h6 className="text-white">Years of Experiences</h6>
                </Card>
              </Col>
              <Col md={4}>
                <Card
                  data-aos="flip-down"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                  className="about-card mx-auto d-md-flex justify-content-center"
                  style={{ minHeight: "150px" }}
                >
                  <h1 className="count-up-text">
                    {counterOn && (
                      <CountUp start={150} end={200} duration={2}></CountUp>
                    )}
                    +
                  </h1>
                  <h6 className="text-white">Projects Completed</h6>
                </Card>
              </Col>
              <Col md={4}>
                <Card
                  data-aos="flip-down"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                  className="about-card mx-auto d-md-flex justify-content-center"
                  style={{ minHeight: "150px" }}
                >
                  <h1 className="count-up-text">
                    {counterOn && (
                      <CountUp start={50} end={100} duration={2}></CountUp>
                    )}
                  </h1>
                  <h6 className="text-white">Happy Clients</h6>
                </Card>
              </Col>
            </Row>
          </ScrollTrigger>
        </Container>
      </div>

      <div className="container pt-4 pb-5">
        <h2
          className="about-text text-center"
          style={{
            fontSize: "40px",
            fontWeight: "bolder",
            color: "var(--text-color)",
          }}
        >
          GALLERY
          <hr className="w-50 mx-auto my-0" style={{ color: "black" }} />
        </h2>

        <p
          className="w-50 mx-auto mt-4 text-center"
          style={{
            color: "white",
            letterSpacing: "1.5px",
            fontSize: "17px",
            textTransform: "uppercase",
          }}
        >
          Our Last Projects at a Glance
        </p>

        <div className="slider-section mt-4 pt-3">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            navigation
            // pagination={{ clickable: true }}
            autoplay={true}
            slidesPerView={3}
            spaceBetween={40}
            loop={true}
            grabCursor={true}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {slideItems.map((item, i) => (
              <SwiperSlide key={i * 0.9}>
                <div className="single-slide">
                  <img
                    className="gallery-img"
                    src={item?.imgSrc}
                    alt=""
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "55vh",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Design;
