import React, { useState } from 'react';
import prop1 from "./Imgs/image-product-1.jpg";
import prop2 from "./Imgs/image-product-2.jpg";
import prop3 from "./Imgs/image-product-3.jpg";
import prop4 from "./Imgs/image-product-4.jpg";
import MainImage from './MainImage';
const ZoomImages = () => {
  const [props, setProps] = useState([
    { src: prop1, alt: "img1", id: 1 },
    { src: prop2, alt: "img2", id: 2 },
    { src: prop3, alt: "img3", id: 3 },
    { src: prop4, alt: "img4", id: 4 }
  ]);
  console.log('ZoomImages props:', props);
  return <MainImage props={props} />;
};

export default ZoomImages;