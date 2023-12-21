import React, { useState } from 'react';
import Sneaker from './Sneaker.jsx';
import prop1 from "./Imgs/image-product-1-thumbnail.jpg";
import prop2 from "./Imgs/image-product-2-thumbnail.jpg";
import prop3 from "./Imgs/image-product-3-thumbnail.jpg";
import prop4 from "./Imgs/image-product-4-thumbnail.jpg";

const Home = () => {
  const [imgs, setImgs] = useState([
    { src: prop1, alt: "img1", id: 1 },
    { src: prop2, alt: "img2", id: 2 },
    { src: prop3, alt: "img3", id: 3 },
    { src: prop4, alt: "img4", id: 4 }
  ]);

  return <Sneaker imgs={imgs} />;
};

export default Home;
