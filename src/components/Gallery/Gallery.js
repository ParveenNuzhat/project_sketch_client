import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./Gallery.css";

const Gallery = (props) => {
  const { id, title, projectImg } = props.item;
  console.log(props.item);
  // const { galleryId } = useParams();
  // console.log(galleryId);

  return (
    <div>
      <Col>
        <Link to={`/gallery/${id}`}>
          <Card className="project-card">
            <Card.Body>
              <Card.Title className="text-end">{title}</Card.Title>
              <Card.Img className="project-img img-fluid" src={projectImg} />
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </div>
  );
};

export default Gallery;
