import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./GalleryFolder.css";

const GalleryFolder = () => {
  const { galleryId } = useParams();

  const [gallery, setGallery] = useState([]);
  //   console.log(gallery);
  useEffect(() => {
    fetch("/fakeData.JSON")
      .then((res) => res.json())
      .then((data) => console.log(data[0].project));
  }, []);

  //   const folderGallery = gallery?.map((fg) => fg.project);
  //   const folderId = folderGallery.find((item) => item);
  //   console.log(folderGallery);
  //   console.log(folderId);
  return (
    <div className="home-container">
      <Header></Header>
      <h1>folder</h1>
      {/* {gallery?.project?.imgGallery?.map((item) => console.log(item))} */}
      <Footer></Footer>
    </div>
  );
};

export default GalleryFolder;
