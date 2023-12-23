import React, { useState } from 'react';
import SneakerText from "./SneakerText";
import MainImage from "./MainImage";
import prop1 from "./Imgs/image-product-1.jpg";
import prop2 from "./Imgs/image-product-2.jpg";
import prop3 from "./Imgs/image-product-3.jpg";
import prop4 from "./Imgs/image-product-4.jpg";


const Sneaker = ({ imgs }) => {
    const [props, setProps] = useState([
        { src: prop1, alt: "img1", id: 1 },
        { src: prop2, alt: "img2", id: 2 },
        { src: prop3, alt: "img3", id: 3 },
        { src: prop4, alt: "img4", id: 4 }
      ]);
    const [Id, setId] = useState(null);

    const handleClickEvent = (id) => {
        setId(id);
    }

    return (
        <div className="flex flex-row absolute">
            <div className="mx-20">
                <div>
                    <img src={prop1} className="size-[25rem] rounded-2xl" alt="main1" />
                </div>
                <div className="flex flex-row mt-8">
                    {imgs.map((img) => (
                        <button key={img.id} onClick={() => handleClickEvent(img.id)} >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="size-20 mr-[1.65rem] rounded-xl hover:border-orange-600 hover:border-2 hover:opacity-60"
                            />
                        </button>
                    ))}
                </div>
            </div>
            <SneakerText />
            {Id !== null && <MainImage props={ props } id={Id} />}
        </div>
    );
};

export default Sneaker;
