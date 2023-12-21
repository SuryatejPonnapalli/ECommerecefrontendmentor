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
        </div>
     );
}
 
export default SneakerText;

