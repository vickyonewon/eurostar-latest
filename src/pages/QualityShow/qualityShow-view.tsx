import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { suites } from "../../components/constants/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./qualityShow.css";
import DoneIcon from "@mui/icons-material/Done";
import QualityShowController from "./qualityShow-controller";
import {  useNavigate } from "react-router-dom";


const QualityShow = () => { 
  const useHomeController = QualityShowController();
  const nav=useNavigate();
  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-[5rem] pb-[8rem]">
        <h1 className="text-center text-[2.2rem] lg:text-[2.5rem] w-full lg:w-[40rem] font-medium m-[2.25rem] mb-[4rem]">
          Explore Luxury Hotel & Suites Are People Choosing
        </h1>
        <div className="max-w-[90vw] w-fit m-auto">
          <Slider
            {...useHomeController.settings}
            className="p-[1rem] w-full 2xl:w-[90rem] pb-[4rem]"
          >
            {suites.map((suite, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex flex-col lg:flex-row w-full">
                  <div className="w-full lg:w-[55%] bg-[#f4f2f1]">
                    <div className="w-full flex flex-col p-[1rem] group">
                      <h1 className="text-[2rem] font-medium m-[1rem]">
                        {suite.title}
                      </h1>
                      <p className="text-[1.1rem] text-gray-500 font-medium m-[1rem] mb-[3rem]">
                        {suite.subTitle}
                      </p>
                      <p className="text-[1.1rem] text-gray-500 font-medium m-[1rem] mb-[1rem]">
                        From{" "}
                        <span className="text-[1.7rem] font-bold text-[#ab6034]">
                          ₹{suite.price}
                        </span>{" "}
                        /per night
                      </p>
                      <button onClick={()=> nav(`/rooms/${suite.title.split(' ')[0]}`)} className="m-[1rem] w-[60%] font-medium hover:bg-[#ab6034] group-hover:bg-[#ab6034] text-[1.1rem] text-center hover:text-white group-hover:text-white py-[0.8rem] px-6 mt-6 border border-gray-400">
                        Book Now {" >"}
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-[40%]">
                    <img
                      className="h-[25rem] w-full"
                      src={`/assets/images/${suite.image}`}
                      alt="rooms slides"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="w-full">
        <video
          className="h-[40rem] w-full object-cover"
          src="/assets/video.mp4"
          poster="../assets/images/front1.jpg"
          controls
        />
      </div>

      <div className="flex flex-col lg:flex-row p-[0] lg:p-[2rem] pt-[8rem] pb-[8rem] lg:max-w-[90%] w-fit m-auto justify-center items-center">
        <div className="flex flex-col w-full lg:w-5/12 p-[1rem]">
          <p className="text-[1.1rem] font-semibold text-[#ab6034] m-[1rem]">
            Food & Drink
          </p>
          <h1 className="text-[2.2rem] font-semibold ml-[1rem]">
            Quality Food & Drink Your Trip Are Enjoyable
          </h1>
          <p className="text-[1rem] text-gray-500 m-[1rem]">
            Sed ut perspiciatis unde omniste natus voluptatem accusantiume
            doloremque laudantium, totam rem aperiam inventore
          </p>
          <div className="flex flex-row m-[1rem] mb-[0.4rem]">
            <DoneIcon
              className="text-[#ab6034] mr-[1rem]"
              style={{ fontSize: "2rem" }}
            />
            <div className="flex flex-col">
              <h1 className="text-[1.5rem]">Free breakfast, tea & coffee</h1>
              <p className="text-[1rem] text-gray-500">
                To take a trivial example, which undertakes laborious
              </p>
            </div>
          </div>
          <div className="flex flex-row m-[1rem] mb-[0.4rem]">
            <DoneIcon
              className="text-[#ab6034] mr-[1rem]"
              style={{ fontSize: "2rem" }}
            />
            <div className="flex flex-col">
              <h1 className="text-[1.5rem]">Free breakfast, tea & coffee</h1>
              <p className="text-[1rem] text-gray-500">
                To take a trivial example, which undertakes laborious
              </p>
            </div>
          </div>
          <button className="text-[1.1rem] w-fit mt-[2rem] ml-[2rem] font-medium text-gray-600 p-[0.5rem] border-[1px] border-gray-400">
            Learn More Us {" >"}
          </button>
        </div>
        <div className="w-full h-[20rem] lg:w-[45rem] lg:h-[32rem]">
          <img
            className="h-full"
            src="/assets/images/restaurant1.jpg"
            alt="restro"
          />
          <div className="text-[1.4rem] w-fit relative bottom-[5rem] right-[1rem] p-[1rem] pt-[1.5rem] bg-[#ab6034] text-white">
            <h1>Enjoy together</h1>
            <p className="italic">Our Rooms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityShow;
