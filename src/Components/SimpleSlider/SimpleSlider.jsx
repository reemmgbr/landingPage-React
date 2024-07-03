import Slider from "react-slick";
import firstimge from "../../Similar Properties image 2-B_8WMRCQ.png";
import secondimge from "../../Similar Properties image 1-IVaxcbz2.png";
import thirdimge from "../../Similar Properties image 3-D7iYi9AZ.png";
import fourthimge from "../../Similar Properties image 4-Ds5fj7fz.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {" "}
      <h1 className="text-[#5570f1] text-[25px] font-bold mt-8 mx-20">
        Similar Properties
      </h1>{" "}
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="p-4">
          <div className="relative">
            <img src={firstimge} alt="Property" className="w-full h-44" />
            <div className="mr-3 bg-[#5570F1]  absolute top-5 right-2  duration-300  text-white hover:text-[#5570F1] hover:bg-white rounded-full md:w-8 md:h-8 w-8 h-8 text-center flex justify-center items-center cursor-pointer  ">
              <i className="fa-regular fa-heart text-2xl"></i>
            </div>
          </div>{" "}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <div className="flex justify-between">
                <h2 className="font-semibold">
                  Cairo, Ain Shams near universities
                </h2>
                <div className="flex align-middle">
                  {" "}
                  <i className="fa-solid fa-star mr-1 text-[#FF8D07] "></i>
                  <p className=" text-black font-bold ">4.5</p>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex align-middle">
                  <i className="fa-regular fa-clock text-[#FF8D07] mr-1 mt-0.5"></i>
                  <p className="text-gray-600 ">full year</p>
                </div>
                <div className="flex ">
                  {" "}
                  <p className="text-[#5570F1]"> &120 </p>{" "}
                  <span className=" text-gray-500  font-bold">/ month</span>
                </div>
              </div>
              <div className="flex  border-b border-gray-300 mt-3 ">
                <i className="fa-solid fa-house text-[#FF8D07] text-sm mr-1 mt-0.5"></i>
                <p className="text-gray-600 mb-2">Department Bills Included</p>
              </div>{" "}
              <div className=" mt-3  mb-6">
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
              <div className="flex items-center justify-between px-4 cursor-pointer">
                <div className="bg-[#5570F1] py-1.5 px-6 flex transition duration-300 hover:bg-[#3B4A9E]">
                  <p className="text-white text-[15px]">Check</p>
                  <i className="fa-solid fa-arrow-right text-white ml-2 my-0.5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="p-4">
          <div className="relative">
            <img src={thirdimge} alt="Property" className="w-full h-44" />
            <div className="mr-3 bg-[#5570F1]  absolute top-5 right-2  duration-300  text-white hover:text-[#5570F1] hover:bg-white rounded-full md:w-8 md:h-8 w-8 h-8 text-center flex justify-center items-center cursor-pointer  ">
              <i className="fa-regular fa-heart text-2xl"></i>
            </div>
          </div>{" "}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <div className="flex justify-between">
                <h2 className="font-semibold">
                  Cairo, Ain Shams near universities
                </h2>
                <div className="flex align-middle">
                  {" "}
                  <i className="fa-solid fa-star mr-1 text-[#FF8D07] "></i>
                  <p className=" text-black font-bold ">4.5</p>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex align-middle">
                  <i className="fa-regular fa-clock text-[#FF8D07] mr-1 mt-0.5"></i>
                  <p className="text-gray-600 ">full year</p>
                </div>
                <div className="flex ">
                  {" "}
                  <p className="text-[#5570F1]"> &120 </p>{" "}
                  <span className=" text-gray-500  font-bold">/ month</span>
                </div>
              </div>
              <div className="flex  border-b border-gray-300 mt-3 ">
                <i className="fa-solid fa-house text-[#FF8D07] text-sm mr-1 mt-0.5"></i>
                <p className="text-gray-600 mb-2">Department Bills Included</p>
              </div>{" "}
              <div className=" mt-3  mb-6">
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
              <div className="flex items-center justify-between px-4 cursor-pointer">
                <div className="bg-[#5570F1] py-1.5 px-6 flex transition duration-300 hover:bg-[#3B4A9E]">
                  <p className="text-white text-[15px]">Check</p>
                  <i className="fa-solid fa-arrow-right text-white ml-2 my-0.5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="p-4">
          <div className="relative">
            <img src={secondimge} alt="Property" className="w-full h-44" />
            <div className="mr-3 bg-[#5570F1]  absolute top-5 right-2  duration-300  text-white hover:text-[#5570F1] hover:bg-white rounded-full md:w-8 md:h-8 w-8 h-8 text-center flex justify-center items-center cursor-pointer  ">
              <i className="fa-regular fa-heart text-2xl"></i>
            </div>
          </div>{" "}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <div className="flex justify-between">
                <h2 className="font-semibold">
                  Cairo, Ain Shams near universities
                </h2>
                <div className="flex align-middle">
                  {" "}
                  <i className="fa-solid fa-star mr-1 text-[#FF8D07] "></i>
                  <p className=" text-black font-bold ">4.5</p>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex align-middle">
                  <i className="fa-regular fa-clock text-[#FF8D07] mr-1 mt-0.5"></i>
                  <p className="text-gray-600 ">full year</p>
                </div>
                <div className="flex ">
                  {" "}
                  <p className="text-[#5570F1]"> &120 </p>{" "}
                  <span className=" text-gray-500  font-bold">/ month</span>
                </div>
              </div>
              <div className="flex  border-b border-gray-300 mt-3 ">
                <i className="fa-solid fa-house text-[#FF8D07] text-sm mr-1 mt-0.5"></i>
                <p className="text-gray-600 mb-2">Department Bills Included</p>
              </div>{" "}
              <div className=" mt-3  mb-6">
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
              <div className="flex items-center justify-between px-4 cursor-pointer">
                <div className="bg-[#5570F1] py-1.5 px-6 flex transition duration-300 hover:bg-[#3B4A9E]">
                  <p className="text-white text-[15px]">Check</p>
                  <i className="fa-solid fa-arrow-right text-white ml-2 my-0.5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 4 */}
        <div className="p-4">
          <div className="relative">
            <img src={fourthimge} alt="Property" className="w-full h-44" />
            <div className="mr-3 bg-[#5570F1]  absolute top-5 right-2  duration-300  text-white hover:text-[#5570F1] hover:bg-white rounded-full md:w-8 md:h-8 w-8 h-8 text-center flex justify-center items-center cursor-pointer  ">
              <i className="fa-regular fa-heart text-2xl"></i>
            </div>
          </div>{" "}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <div className="flex justify-between">
                <h2 className="font-semibold">
                  Cairo, Ain Shams near universities
                </h2>
                <div className="flex align-middle">
                  {" "}
                  <i className="fa-solid fa-star mr-1 text-[#FF8D07] "></i>
                  <p className=" text-black font-bold ">4.5</p>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex align-middle">
                  <i className="fa-regular fa-clock text-[#FF8D07] mr-1 mt-0.5"></i>
                  <p className="text-gray-600 ">full year</p>
                </div>
                <div className="flex ">
                  {" "}
                  <p className="text-[#5570F1]"> &120 </p>{" "}
                  <span className=" text-gray-500  font-bold">/ month</span>
                </div>
              </div>
              <div className="flex  border-b border-gray-300 mt-3 ">
                <i className="fa-solid fa-house text-[#FF8D07] text-sm mr-1 mt-0.5"></i>
                <p className="text-gray-600 mb-2">Department Bills Included</p>
              </div>{" "}
              <div className=" mt-3  mb-6">
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
              <div className="flex items-center justify-between px-4 cursor-pointer">
                <div className="bg-[#5570F1] py-1.5 px-6 flex transition duration-300 hover:bg-[#3B4A9E]">
                  <p className="text-white text-[15px]">Check</p>
                  <i className="fa-solid fa-arrow-right text-white ml-2 my-0.5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 5 */}
        <div className="p-4">
          <div className="relative">
            <img src={fourthimge} alt="Property" className="w-full h-44" />
            <div className="mr-3 bg-[#5570F1]  absolute top-5 right-2  duration-300  text-white hover:text-[#5570F1] hover:bg-white rounded-full md:w-8 md:h-8 w-8 h-8 text-center flex justify-center items-center cursor-pointer  ">
              <i className="fa-regular fa-heart text-2xl"></i>
            </div>
          </div>{" "}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <div className="flex justify-between">
                <h2 className="font-semibold">
                  Cairo, Ain Shams near universities
                </h2>
                <div className="flex align-middle">
                  {" "}
                  <i className="fa-solid fa-star mr-1 text-[#FF8D07] "></i>
                  <p className=" text-black font-bold ">4.5</p>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex align-middle">
                  <i className="fa-regular fa-clock text-[#FF8D07] mr-1 mt-0.5"></i>
                  <p className="text-gray-600 ">full year</p>
                </div>
                <div className="flex ">
                  {" "}
                  <p className="text-[#5570F1]"> &120 </p>{" "}
                  <span className=" text-gray-500  font-bold">/ month</span>
                </div>
              </div>
              <div className="flex  border-b border-gray-300 mt-3 ">
                <i className="fa-solid fa-house text-[#FF8D07] text-sm mr-1 mt-0.5"></i>
                <p className="text-gray-600 mb-2">Department Bills Included</p>
              </div>{" "}
              <div className=" mt-3  mb-6">
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
              <div className="flex items-center justify-between px-4 cursor-pointer">
                <div className="bg-[#5570F1] py-1.5 px-6 flex transition duration-300 hover:bg-[#3B4A9E]">
                  <p className="text-white text-[15px]">Check</p>
                  <i className="fa-solid fa-arrow-right text-white ml-2 my-0.5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Slide 5 */}
        <div className="p-4">
          <div className="relative">
            <img src={fourthimge} alt="Property" className="w-full h-44" />
            <div className="mr-3 bg-[#5570F1]  absolute top-5 right-2  duration-300  text-white hover:text-[#5570F1] hover:bg-white rounded-full md:w-8 md:h-8 w-8 h-8 text-center flex justify-center items-center cursor-pointer  ">
              <i className="fa-regular fa-heart text-2xl"></i>
            </div>
          </div>{" "}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4">
              <div className="flex justify-between">
                <h2 className="font-semibold">
                  Cairo, Ain Shams near universities
                </h2>
                <div className="flex align-middle">
                  {" "}
                  <i className="fa-solid fa-star mr-1 text-[#FF8D07] "></i>
                  <p className=" text-black font-bold ">4.5</p>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex align-middle">
                  <i className="fa-regular fa-clock text-[#FF8D07] mr-1 mt-0.5"></i>
                  <p className="text-gray-600 ">full year</p>
                </div>
                <div className="flex ">
                  {" "}
                  <p className="text-[#5570F1]"> &120 </p>{" "}
                  <span className=" text-gray-500  font-bold">/ month</span>
                </div>
              </div>
              <div className="flex  border-b border-gray-300 mt-3 ">
                <i className="fa-solid fa-house text-[#FF8D07] text-sm mr-1 mt-0.5"></i>
                <p className="text-gray-600 mb-2">Department Bills Included</p>
              </div>{" "}
              <div className=" mt-3  mb-6">
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
              <div className="flex items-center justify-between px-4 cursor-pointer">
                <div className="bg-[#5570F1] py-1.5 px-6 flex transition duration-300 hover:bg-[#3B4A9E]">
                  <p className="text-white text-[15px]">Check</p>
                  <i className="fa-solid fa-arrow-right text-white ml-2 my-0.5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
