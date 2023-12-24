import { useState } from 'react';



const MainImage = ({ props,id }) => {
    const selectedImage = props.find(img => img.id === id);
    return ( 
        <div className="absolute">
             {selectedImage && <img src={selectedImage.src} alt="img" className=" size-4/12 ml-[23rem] rounded-lg"/>}
        </div>
     );
}

export default MainImage;