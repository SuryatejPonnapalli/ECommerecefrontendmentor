import Pfp from "./Imgs/image-avatar.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="flex flex-col">
        <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-8 ml-36">
                <p className=" mr-10 mt-8 font-Kumbh font-bold text-3xl">sneakers</p>
                <p className="font-Kumbh mt-10 text-neutral-400">Collections</p>
                <p className="font-Kumbh mt-10 text-neutral-400">Men</p>
                <p className="font-Kumbh mt-10 text-neutral-400">Women</p>
                <p className="font-Kumbh mt-10 text-neutral-400">About</p>
                <p className="font-Kumbh mt-10 text-neutral-400">Contact</p>
            </div>
            <div className="flex flex-row space-x-8 mr-36 ">
            <Link to = "/cart"><svg width="22" height="20" className="mt-12" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg></Link>
            <img src={Pfp} alt="profile-pic" className=" size-11 mt-9"/>
            </div>
        </div>
        <div className=" border-[0.063rem] mt-8 mx-36 border-neutral-200 border-solid"></div>
        </nav>
     );
}
 
export default Navbar;