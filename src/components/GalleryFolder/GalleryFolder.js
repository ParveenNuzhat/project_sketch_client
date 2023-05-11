import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./GalleryFolder.css";
import { ProjectsContext } from "../../contexts/projects.context";

const GalleryFolder = () => {
  const { projects } = useContext(ProjectsContext);
  const { galleryId } = useParams();

  const project = projects.filter((project) => project.id === galleryId);

  console.log(project);
  return (
    <div className="home-container">
      <Header></Header>
      <div className="my-5 py-3 text-center">
        {project.map((item) => (
          <>
            <h3>{item?.title}</h3>
            {item.images.map((img, i) => (
              <>
                <img
                  className="w-100 p-5 img-fluid"
                  key={i}
                  src={img}
                  alt="img"
                />
              </>
            ))}
          </>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GalleryFolder;
