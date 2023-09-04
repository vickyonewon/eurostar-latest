import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/navbar-view";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { rooms, facilities, suites, customers, news } from "./constants/data";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slick-custom.css";
import DoneIcon from "@mui/icons-material/Done";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeController from "./home-controller";
import Footer from "../../components/footer";


const Home = () => {
  const useHomeController=HomeController();
  return (
    <div>
      <Navbar bgColor="#1d1b1a" textColor="white" />
      <div className="bg-[#1d1b1a] bg-cover bg-no-repeat h-[120vh]">
        <div className="flex flex-col lg:flex-row mb-[10rem] lg:pt-[5rem] relative z-[40]">
          <div className="ml-[2rem] flex flex-col p-2 mt-4 lg:mt-[6rem] z-[5]">
            <p
              className="text-[1.4rem] lg:text-[1.3rem] tracking-[0.08em] lg:w-[30rem] text-white font-bold"
              data-aos="fade-down"
            >
              Welcome Home
            </p>
            <h1
              className="text-[2rem] lg:text-[3.5rem] tracking-[0.12em] lg:w-[30rem] text-white font-bold"
              data-aos="fade-down"
            >
              Enjoy Vacations
            </h1>
            <p
              className="text-[2rem] relative lg:text-[3.5rem] lg:w-[40rem] text-white font-bold"
              data-aos="fade-down"
            >
              With{" "}
              <span className="italic font-medium z-[10]">
                EurostarInn Hotel
              </span>
            </p>
            <button
              data-aos="fade-up"
              className="border-none bg-[#ab6034] text-[1.1rem] text-white w-fit py-4 px-6 mt-6 hover:bg-[#1f1c1b] border-[4px] hover:border-white"
            >
              Explore Our Rooms {" >"}
            </button>
          </div>
          <div
            className="z-[2] relative lg:absolute lg:w-[50rem] lg:right-[5rem] mt-[2rem]"
            data-aos="fade-left"
          >
            <Carousel
              interval={4000}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              className=""
            >
              <div className="justify-center items-center">
                <img
                  className="lg:h-[28rem] h-[24rem] w-[50rem]"
                  src="/assets/images/gallery.jpg"
                  alt="gallery"
                />
              </div>
              <div>
                <img
                  className="lg:h-[28rem] h-[24rem] w-[50rem]"
                  src="/assets/images/home_restro.jpg"
                  alt="restro"
                />
              </div>
              <div>
                <img
                  className="lg:h-[28rem] h-[24rem] w-[50rem]"
                  src="/assets/images/home_room.jpg"
                  alt="room"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-[5rem] lg:pt-[8rem] z-[30]">
        <div className="flex flex-col lg:flex-row mb-[4rem]">
          <div className="justify-center items-center">
            <div className="w-fit m-auto">
              <img
                src="/assets/images/hotelstarsicon.jpeg"
                className="drop-shadow-2xl rounded-full absolute left-[17rem] w-[8rem] h-[8rem] m-[1rem] lg:ml-[2rem]"
                alt="hotel-star-icon"
                data-aos="fade-right"
              />
              <img
                src="/assets/images/toilet1.jpg"
                className="w-[15rem] h-[15rem] m-[1rem] lg:ml-[2rem]"
                alt="toilet1"
              />
              <img
                src="/assets/images/toilet2.jpg"
                className="w-[15rem] h-[17rem] m-[1rem] lg:ml-[18rem] ml-[13rem]"
                alt="toilet2"
              />
              <div
                className="absolute lg:left-[6rem] md:left-[12rem] md:top-[190vh] left-[1rem] flex flex-col w-fit bg-[#ab6034] p-[1rem] text-white"
                data-aos="fade-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="50"
                  fill="currentColor"
                  className="bi bi-play w-[12rem]"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                </svg>
                <p className="text-[1.5rem]">Watch Latest</p>
                <p className="italic">Videos</p>
              </div>
            </div>
          </div>

          <div className="lg:ml-[10rem]">
            <p className="text-[#ab6034] font-semibold text-[1.2rem] m-[1rem]">
              About Company
            </p>
            <h1 className="m-[1rem] text-[2.5rem] tracking-[.1em] font-semibold max-w-[40rem]">
              World Class Luxury Hotel & Restaurant Near City
            </h1>
            <p className="m-[1rem] mb-[2rem] text-[1rem] text-gray">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment
            </p>
            <div className="flex flex-col lg:flex-row m-[1rem] bg-[#f4f2f1] p-[1.4rem]">
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-check2 text-[#ab6034] font-bold"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
                <div className="flex flex-col m-[1rem]">
                  <h1 className="text-[1.5rem] font-medium">
                    Trusted Partners
                  </h1>
                  <p className="text-[1.1rem] text-gray-600 mt-[1rem]">
                    Sed ut perspiciatis omniste natus voluptatem accus
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-check2 text-[#ab6034] font-bold"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
                <div className="flex flex-col m-[1rem]">
                  <h1 className="text-[1.5rem] font-medium">Luxury Services</h1>
                  <p className="text-[1.1rem] text-gray-600 mt-[1rem]">
                    Quis autem voluptate velise molestiae conse rem
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col m-[1rem] p-[1rem] lg:justify-between justify-center items-center">
              <img
                className="rounded-full w-[4.5rem] h-[4.5rem] mr-[2rem] m-[1rem]"
                src="/assets/images/toilet3.jpg"
                alt="toilet3"
              />
              <div className="flex flex-col p-[1rem] relative lg:left-[-2rem] m-[1rem]">
                <h1 className="text-[1.4rem] text-medium">
                  Robert Ravi Mishra
                </h1>
                <p className="text-[1.1rem] text-gray-600">CEO & Founder</p>
              </div>
              <img
                className="w-[18rem] h-[4rem] m-[1rem]"
                src="/assets/images/toilet4.jpg"
                alt="toilet4"
              />
            </div>
          </div>
        </div>
      </div>

      
<div className="flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between mb-[1.5rem]">
          <div className="text-[2.5rem] font-semibold w-[fit] lg:w-[30rem] ml-[2rem]">
            Take A Look Our Luxury Rooms and Hotel
          </div>
          <div className="">
            <button
              data-aos="fade-up"
              className="border-none bg-[#ab6034] text-[1.1rem] text-white w-fit py-4 px-6 mt-6 m-[2rem] hover:bg-[#1f1c1b] border-[4px] hover:border-white"
            >
              Explore Rooms {" >"}
            </button>
          </div>
        </div>
        {/* <div className="hidden lg:block lg:bg-[#1c1a19] lg:h-[25rem] lg:relative" /> */}
        <div className="flex flex-col lg:flex-row justify-center items-center p-[1.5rem] relative z-[5]">
          {rooms.map((room) => (
            <div className="w-fit lg:w-[29rem] m-[0.8rem] bg-white">
              <img
                className="w-[100%] h-[18rem] cursor-pointer hover:scale-105"
                src={`/assets/images/${room.image}`}
                alt="room"
              />
              <div className="flex flex-col p-[1rem]">
                <h1 className="text-[1.8rem] font-bold my-[0.7rem]">
                  {room.title}
                </h1>
                <div className="flex flex-ro7">
                  <div className="flex flex-row text-[1.15rem] text-gray-600 mr-[1.7rem] mb-[1rem]">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person w-[2rem] h-[1.6rem] text-[#ab6034]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                    Adults: {room.adults}
                  </div>
                  <div className="flex flex-row text-[1.15rem] text-gray-600 mr-[0.7rem] mb-[1rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-rulers w-[2rem] h-[1.3rem] text-[#ab6034]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                    </svg>
                    Size: {room.size} ft2
                  </div>
                </div>
                <p className="text-[1.15rem] text-gray-600 my-[0.7rem]">
                  {room.subTitle}
                </p>
                <p className="text-[1.15rem] text-gray-600 my-[0.7rem]">
                  From{" "}
                  <span className="text-[1.7rem] font-bold text-[#ab6034]">
                    ${room.price}
                  </span>{" "}
                  /per night
                </p>
              </div>
              <button className="border-none w-[100%] font-bold bg-[#eeeceb] text-black hover:bg-[#ab6034] text-[1.1rem] text-center hover:text-white py-[0.7rem] px-6 mt-6 border-[4px] hover:border-white">
                Book Now {" >"}
              </button>
            </div>
          ))}
        </div>
        <div className="bg-[#1d1b1a] bg-cover bg-no-repeat h-fit z-[4]">
          <div className="flex flex-wrap justify-center items-center lg:flex-row py-[2rem] pt-[8rem] relative ">
            <div className="flex flex-col text-center w-[18rem] p-[1rem] mx-[1rem]">
              <div className="bg-[#ab6034] text-[4rem] p-[0.8rem] text-white">
                49 +
              </div>
              <div className="text-[1.5rem] p-[0.5rem] bg-white text-black">
                Luxury Hotels
              </div>
            </div>
            <div className="flex flex-col text-center w-[18rem] p-[1rem] mx-[1rem]">
              <div className="bg-[#ab6034] text-[4rem] p-[0.8rem] text-white">
                49 +
              </div>
              <div className="text-[1.5rem] p-[0.5rem] bg-white text-black">
                Luxury Hotels
              </div>
            </div>
            <div className="flex flex-col text-center w-[18rem] p-[1rem] mx-[1rem]">
              <div className="bg-[#ab6034] text-[4rem] p-[0.8rem] text-white">
                49 +
              </div>
              <div className="text-[1.5rem] p-[0.5rem] bg-white text-black">
                Luxury Hotels
              </div>
            </div>
            <div className="flex flex-col text-center w-[18rem] p-[1rem] mx-[1rem]">
              <div className="bg-[#ab6034] text-[4rem] p-[0.8rem] text-white">
                49 +
              </div>
              <div className="text-[1.5rem] p-[0.5rem] bg-white text-black">
                Luxury Hotels
              </div>
            </div>
          </div>

          <div className="bg-[#1d1b1a] flex flex-wrap justify-center items-center p-[1rem] w-full mb-[3rem] relative ">
            {facilities.map((fac) => (
              <div className="flex flex-row p-[1rem] mb-[1rem]">
                <div className=" text-white mb-[1rem] mr-[1.5rem]">
                  {<fac.icon style={{ fontSize: "3rem" }} />}
                </div>
                <div className="flex flex-col">
                  <div className="text-[1.5rem] text-white font-semibold">
                    {fac.title}
                  </div>
                  <div className="text-[1.1rem] text-gray-400 w-[20rem] mt-[1rem]">
                    {fac.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-[5rem] pb-[8rem]">
        <h1
          className="text-center text-[2.5rem] w-full lg:w-[40rem] font-medium m-[2.25rem] mb-[4rem]"
          data-aos="fade-right"
        >
          Explore Luxury Hotel & Suites Are People Choosing
        </h1>
        <Slider
          {...useHomeController.settings}
          className="p-[2rem] w-[100%] pb-[4rem] lg:pl-[3rem]"
        >
          {suites.map((suite) => (
            <div className="flex flex-col" data-aos="fade-up">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-6/12 bg-[#f4f2f1]">
                  <div className="w-full flex flex-col p-[1rem]">
                    <h1 className="text-[2.2rem] font-medium m-[1rem]">
                      {suite.title}
                    </h1>
                    <p className="text-[1.1rem] text-gray-500 font-medium m-[1rem] mb-[3rem]">
                      {suite.subTitle}
                    </p>
                    <p className="text-[1.1rem] text-gray-500 font-medium m-[1rem] mb-[1rem]">
                      From{" "}
                      <span className="text-[1.7rem] font-bold text-[#ab6034]">
                        ${suite.price}
                      </span>{" "}
                      /per night
                    </p>
                    <button className="m-[1rem] w-[60%] font-medium hover:bg-[#ab6034] text-[1.1rem] text-center hover:text-white py-[0.8rem] px-6 mt-6 border border-gray-400">
                      Book Now {" >"}
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-[18.5rem]">
                  <img
                    className="h-full"
                    src={`/assets/images/${suite.image}`}
                    alt="toilet"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-[100%]">
        <video
          className="h-[110vh] w-[100%]"
          src="/assets/kirtan.mp4"
          poster="../assets/images/hotelimage.jpg"
          controls
        />
      </div>

      
    </div>
  );
};

export default Home;
































































































































































































