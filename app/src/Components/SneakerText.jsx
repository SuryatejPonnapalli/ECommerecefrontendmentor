const SneakerText = () => {

    return ( 
        <div className=" mt-12 ml-16 w-5/12">
            <p className="text-orange-400 text-sm font-semibold font-Kumbh mb-6">SNEAKER COMPANY</p>
            <p className="text-5xl font-bold pr-7">Fall Limited Edition Sneakers</p>
            <p className=" text-neutral-400 mt-8 text-[0.85rem] font-bold pr-10">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="flex flex-row mt-5 items-center">
                <p className=" text-3xl font-bold font-Kumbh ">$125.00</p>
                <div className="ml-4 bg-orange-100 px-2 rounded-md"><p className=" text-orange-400 font-semibold text-md">50%</p></div>
            </div>
            <p className="mt-1 text-neutral-300 font-bold line-through decoration-solid">$250</p>
            <div className="flex flex-row mt-8 items-center">
                <span className="flex flex-row bg-neutral-100 w-36 h-10 rounded-sm justify-between items-center">
                    <p className="ml-3 text-orange-400 text-xl font-bold hover:text-3xl">-</p>
                    <p className="text-m font-bold font-Kumbh">0</p>
                    <p className="mr-3 text-orange-400 text-xl font-bold  hover:text-3xl">+</p>
                </span>
                <span className="flex flex-row bg-orange-500 border-2 ml-3 w-60 rounded-md justify-center items-center h-12">
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#FFFFFF" fill-rule="nonzero"/></svg>
                <p className="text-white ml-2 font-Kumbh">Add to cart</p>
                </span>
            </div>
        </div>
     );
}
 
export default SneakerText;

