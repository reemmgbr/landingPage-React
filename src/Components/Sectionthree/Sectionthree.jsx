export default function Sectionthree() {
  return (
    <>
      <div className="flex mt-8">
        <p className="mr-3 font-bold text-2xl mb-2">
          Cairo, Ain Shams near universities
        </p>
        <div className="  bg-[#F8B32E] duration-300  text-white hover:text-[#F8B32E] hover:bg-white rounded-full md:w-8 md:h-8 w-8 h-8 text-center flex justify-center items-center cursor-pointer  ">
          {" "}
          <i className="fa-solid fa-share-nodes "></i>{" "}
        </div>
      </div>
      <div
        className="flex
      "
      >
        <ul className="flex text-[#FF8D07] mr-2">
          <li>
            <i className="fa-solid fa-star"></i>
          </li>{" "}
          <li>
            <i className="fa-solid fa-star"></i>
          </li>{" "}
          <li>
            <i className="fa-solid fa-star"></i>
          </li>{" "}
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
        </ul>
        <span className=" text-gray-700 mr-2">4 Review</span>
        <p className=" text-gray-800 ">
          Listed By{" "}
          <a href="" className="underline text-blue-900  ">
            Ahmed Ali
          </a>
        </p>
      </div>
      <div className="flex mt-3">
        <span className="bg-blue-gray-100 font-bold text-[#5570F1] text-sm  me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Studio
        </span>{" "}
        <span className="bg-blue-gray-100 font-bold text-[#5570F1] text-sm  me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Full year
        </span>
        <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          Bills included{" "}
        </span>
      </div>
      <div className=" mt-3">
        <ul className="flex">
          <li className="flex items-center mr-8 ">
            <i className="fa-solid fa-bed mr-1 text-[#F8B32E]"></i>
            <p className="font-medium">4 Beds</p>
          </li>
          <li className="flex items-center  ">
            <i className="fa-solid fa-sink mr-2 text-[#F8B32E]"></i>
            <p className="font-medium">1 Bathroom</p>
          </li>{" "}
          <li className="flex items-center ml-8">
            <i className="fa-brands fa-searchengin mr-2 text-[#F8B32E]"></i>{" "}
            <p className="font-medium">1 23 M</p>
          </li>{" "}
        </ul>
      </div>{" "}
      <div>
        <h3 className="mt-8 mb-3 font-bold text-2xl">Amenities</h3>
        <div className="flex">
          <div className=" w-[60%]">
            <div className="mb-5">
              {" "}
              <span className="bg-blue-100 text-[#5570f1] font-extrabold text-sm  me-2 px-2.5 py-2 rounded dark:bg-[#E7E8F3] dark:text-blue-300">
                Conditioning
              </span>
              <span className="bg-blue-100 text-[#5570f1] font-extrabold text-sm  me-2 px-2.5 py-2 rounded dark:bg-[#E7E8F3] dark:text-blue-300">
                Electricity
              </span>
              <span className="bg-blue-100 text-[#5570f1] font-extrabold text-sm  me-2 px-2.5 py-2 rounded dark:bg-[#E7E8F3] dark:text-blue-300">
                Balacony
              </span>
              <span className="bg-blue-100 text-[#5570f1] font-extrabold text-sm   me-2 px-2.5 py-2 rounded dark:bg-[#E7E8F3] dark:text-blue-300">
                Heating
              </span>
            </div>
            <div className="my-5">
              {" "}
              <span className="bg-blue-100 text-[#5570f1] font-extrabold text-sm  me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
                Heating
              </span>
              <span className="bg-blue-100 text-[#5570f1] font-extrabold text-sm  me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
                Wifi
              </span>
              <span className="bg-blue-100 text-[#5570f1] font-extrabold text-sm  me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
                Smart Tv
              </span>{" "}
              <span className="bg-blue-100 text-[#5570f1] font-extrabold text-sm  me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
                Kitchen
              </span>{" "}
            </div>{" "}
            <span className=" bg-blue-100 text-[#5570f1] font-extrabold text-sm  me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
              Elevator
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="mt-8 mb-3">
        <div className="flex ">
          <h2 className=" font-bold text-3xl  ">Facilities</h2>
          <a
            href=""
            className="flex ml-5 items-center underline text-[#5570F1] font-bold"
          >
            See On Map
          </a>
        </div>
        <ul className="flex mt-4 mb-2">
          <li className="font-medium ">
            <b className="font-extrabold ">. </b> Holmes
          </li>{" "}
          <li className="font-medium ml-20">
            <b className="font-extrabold">. </b>KFC
          </li>{" "}
          <li className="font-medium ml-20">
            <b className="font-extrabold">. </b> Homes
          </li>
        </ul>{" "}
        <ul className="flex">
          <li className="font-medium">
            <b className="font-extrabold">. </b> Holmes
          </li>{" "}
          <li className="font-medium ml-20">
            <b className="font-extrabold">. </b>KFC
          </li>{" "}
          <li className="font-medium ml-20">
            <b className="font-extrabold">. </b> Homes
          </li>
        </ul>
      </div>
    </>
  );
}
