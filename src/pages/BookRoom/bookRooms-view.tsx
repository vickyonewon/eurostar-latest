import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { customers} from "../../components/constants/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./bookRooms.css";
import SearchIcon from "@mui/icons-material/Search";
import BookRoomsController from "./bookRooms-controller";


const BookRooms = () => {
  const useHomeController = BookRoomsController();
  return (
    <div className="flex flex-col justify-center items-center w-auto m-auto lg:flex-row bg-[#1d1b1a] pt-[6rem] p-[2rem] pb-[4rem]">
      <div className="flex flex-col bg-white w-fit px-[2rem] lg:w-[36rem] p-[2rem] h-fit 2xl:py-[5rem] duration-100">
        <p className="text-[1.2rem] text-[#ab6034] ml-[1rem]">
          Booking Your Room
        </p>
        <h1 className="text-[2rem] m-[1rem]">Find & Booked Your Room</h1>
        <div className="flex flex-row m-[1rem] mb-[1.5rem] justify-between border-gray-300 border-b-[1px]">
          <label
            htmlFor="checkin"
            className="text-[1.2rem] m-[6px] h-fit text-left"
          >
            Check-in
          </label>
          <input
            id="checkin"
            type="date"
            className=" p-[0.5rem]"
            placeholder="Check-in"
          />
        </div>
        <div className="flex flex-row m-[1rem] mb-[1.5rem] justify-between border-gray-300 border-b-[1px]">
          <label
            htmlFor="checkout"
            className="text-[1.2rem] m-[6px] h-fit text-left"
          >
            Check-out
          </label>
          <input
            id="checkout"
            type="date"
            className=" p-[0.5rem]"
            placeholder="Check-out"
          />
        </div>
        <div className="flex flex-row m-[1rem] mb-[1.5rem] justify-between border-gray-300 border-b-[1px]">
          <label
            htmlFor="adults"
            className="text-[1.2rem] m-[6px] h-fit text-left"
          >
            Adults
          </label>
          <input
            id="adults"
            type="number"
            className="w-fit lg:p-[0.5rem]"
            placeholder="Adults"
          />
        </div>
        <div className="flex flex-row m-[1rem] mb-[1.5rem] justify-between border-gray-300 border-b-[1px]">
          <label
            htmlFor="children"
            className="text-[1.2rem] m-[6px] h-fit text-left"
          >
            Children
          </label>
          <input
            id="children"
            type="number"
            className="w-fit lg:p-[0.5rem]"
            placeholder="Children"
          />
        </div>
        {/* <input type="date" className="w-full border-gray-300 border-b-[1px] p-[0.5rem] m-[1rem] mb-[1.5rem]" placeholder="Check-out" />
          <input type="number" className="w-full border-gray-300 border-b-[1px] p-[0.5rem] m-[1rem] mb-[1.5rem] text-[1.3rem] font-black" placeholder="Adults" />
          <input type="number" className="w-full border-gray-300 border-b-[1px] p-[0.5rem] m-[1rem] mb-[1.5rem] text-[1.3rem] font-black" placeholder="Children" /> */}
        <button className="lg:m-[1rem] w-[100%] text-white font-medium bg-[#ab6034] text-[1.1rem] text-center hover:text-white py-[0.9rem] px-6 mt-6 mb-[2rem] border border-gray-400">
          Search Now{" "}
          <SearchIcon style={{ fontSize: "1.5rem" }} className="ml-[1rem]" />
        </button>
      </div>

      <div className="flex flex-col w-[100%] lg:w-[50rem] p-[0.5rem] lg:p-[2rem] lg:pl-[4rem]">
        <p className="text-[1.3rem] font-medium text-[#ab6034] m-[1rem] mt-[4rem]">
          Our Testimonials
        </p>
        <h1 className="text-[2rem] font-medium text-white m-[1rem] mb-[2rem]">
          What Our Customer Say Us
        </h1>

        <div className="flex flex-col lg:flex-row">
          <Slider
            ref={useHomeController.sliderRef}
            {...useHomeController.settings2}
            className="w-full lg:w-[85%] h-fit pb-[2rem]"
          >
            {customers.map((cust, index) => (
              <div
                key={index}
                className="flex flex-col p-[1rem] lg:p-[2rem] pt-[4rem] bg-[#0c0b0b] w-[100%] lg:w-fit m-[1rem] min-h-[20rem]"
              >
                <p className="text-white ">{cust.content}</p>
                <div className="flex flex-col lg:flex-row mt-[2rem]">
                  <img
                    className="w-[3.4rem] h-[3.4rem] rounded-full mr-[1rem]"
                    src={`/assets/images/${cust.image}`}
                    alt="toilet"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[1.5rem] text-white">{cust.name}</h1>
                    <p className="text-[1.1rem] text-gray-300">
                      {cust.profession}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex flex-row lg:flex-col w-full lg:ml-[2rem] p-[0.6rem] pt-[2rem]">
            {customers.map((cust) => (
              <img
                key={cust.id}
                className={`w-[3.5rem] h-[3.5rem] rounded-full mb-[1rem] mr-[0.5rem] cursor-pointer ${
                  cust.id === useHomeController.activeItem
                    ? "border-[3px] border-[#ab6034]"
                    : ""
                }`}
                src={`/assets/images/${cust.image}`}
                alt="toilet"
                onClick={() => useHomeController.handleStateChange(cust.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRooms;
