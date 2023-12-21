import React from "react";
import Main from "./Imgs/image-product-1.jpg";
import SneakerText from "./SneakerText";

const Sneaker = ({ imgs }) => {
  return (
    <div className="flex flex-row">
    <div className="mx-20">
      <div>
        <img src={Main} className=" size-[25rem] rounded-2xl" alt="main1" />
      </div>
      <div className="flex flex-row mt-8" >
        {imgs.map((img) => (
          <img src={img.src} alt={img.alt} key={img.id} className=" size-20 mr-[1.65rem] rounded-xl hover:border-orange-600 hover:border-2 hover:opacity-60" />
        ))}
      </div>
    </div>
    <SneakerText />
    </div>
  );
};

export default Sneaker;
