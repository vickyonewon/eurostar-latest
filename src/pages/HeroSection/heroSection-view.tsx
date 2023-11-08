import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Carousel } from "react-responsive-carousel";

const HeroSection: React.FC = () => {
    return (
    <div className="bg-gradient-to-t from-[#1d1b1a] via-[#8A502E] to-[#1d1b1a] bg-cover bg-no-repeat pb-[0] lg:pb-[5rem]">
    <div className="flex flex-col lg:flex-row mb-[5rem] lg:pt-[5rem] relative z-[40]">
      <div className="ml-[8%] flex flex-col p-2 mt-4 lg:mt-[20vh] z-[5]">
        <p
          className="m-[0.5rem] text-[1.4rem] lg:text-[1.4rem] tracking-[0.08em] lg:w-[30rem] text-white font-bold"
          data-aos="fade-down"
        >
          <ArrowRightAltIcon
            style={{
              fontSize: "2.4rem",
              backgroundColor: "#ab6034",
              color: "white",
            }}
            className="mr-[1rem] rounded-xl xl:text-[3rem] p-[0.15rem] px-[0.5rem]"
          />{" "}
          Welcome Home
        </p>
        <h1
          className="m-[0.5rem] text-[1.7rem] lg:text-[3rem] 2xl:text-[4rem] tracking-[0.12em] lg:w-fit text-white font-bold"
          data-aos="fade-down"
        >
          Enjoy Vacations
        </h1>
        <p
          className="m-[0.5rem] text-[1.7rem] relative lg:text-[3rem] 2xl:text-[4rem] lg:w-[40rem] text-white font-bold"
          data-aos="fade-down"
        >
          With{" "}
          <span className="italic font-medium z-[10]">EurostarInn Hotel</span>
        </p>
        <button className="ml-[0.5rem] border-none bg-[#ab6034] tetx-[1.1rem] lg:text-[1.2rem] text-white w-fit py-4 px-6 mt-6 hover:bg-[#1f1c1b] border-[4px] hover:border-white">
          Explore Our Rooms {" >"}
        </button>
      </div>
      <div
        className="z-[2] relative lg:absolute lg:w-7/12 lg:right-[5rem] mt-[3rem]"
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
              className="lg:h-[70vh] h-[30rem] w-[50rem]"
              src="/assets/images/front2.jpg"
              alt="gallery"
            />
          </div>
          <div>
            <img
              className="lg:h-[70vh] h-[30rem] w-[50rem]"
              src="/assets/images/garden.jpg"
              alt="restro"
            />
          </div>
          <div>
            <img
              className="lg:h-[70vh] h-[30rem] w-[50rem]"
              src="/assets/images/home_room.jpg"
              alt="room"
            />
          </div>
        </Carousel>
      </div>
      <div className="w-full bg-gradient-to-br from-black via-transparent to-ab6034 bg-cover bg-center animate-color h-[100px] flex">
        <div
          className="flex w-[400px] justify-end items-end absolute left-[2rem] bottom-[1rem]"
          data-aos="fade-right"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="rgb(110,66,41)"
              d="M45.7,-49.9C61.7,-41,78.9,-29,74,-18.7C69.2,-8.4,42.2,0.2,31.6,18C21.1,35.9,26.9,62.9,20.2,72.9C13.6,82.8,-5.7,75.5,-23.5,67.7C-41.4,59.9,-57.9,51.4,-66.1,37.8C-74.3,24.3,-74.2,5.6,-66.7,-7.4C-59.2,-20.5,-44.4,-27.9,-32.1,-37.4C-19.7,-47,-9.9,-58.7,2.5,-61.6C14.8,-64.6,29.7,-58.8,45.7,-49.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
