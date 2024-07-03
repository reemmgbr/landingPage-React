export default function Tabs() {
  return (
    <>
      <div className="flex justify-end">
        <div className="flex mt-2 ">
          {" "}
          <div className="md:hidden visible mr-2 bg-[#F8B32E] duration-300  text-white hover:text-[#F8B32E] hover:bg-white rounded-full md:w-14 md:h-14 w-8 h-8 text-center flex justify-center items-center cursor-pointer  ">
            {" "}
            <i className="fa-solid fa-share-nodes "></i>{" "}
          </div>
          <div className="mr-3 bg-[#5570F1] duration-300  text-white hover:text-[#5570F1] hover:bg-white rounded-full md:w-14 md:h-14 w-8 h-8 text-center flex justify-center items-center cursor-pointer  ">
            <i className="fa-regular fa-heart text-2xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}
