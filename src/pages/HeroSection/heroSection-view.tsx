import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Carousel } from "react-responsive-carousel";

const HeroSection: React.FC = () => {
    return (
    <div className="bg-gradient-to-t from-[#1d1b1a]  to-[#1d1b1a] bg-cover bg-no-repeat pb-[0] lg:pb-[10rem]">
    <svg className="absolute blur-3xl right-0 opacity-80" width="60%" height="100%" viewBox="0 0 800 1000" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_17_60)"><g filter="url(#filter0_f_17_60)"><path d="M128.6 0H0V322.2L332.5 211.5L128.6 0Z" fill="#8A502E"></path><path d="M0 322.2V400H240H320L332.5 211.5L0 322.2Z" fill="#8A502E">
      </path><path d="M320 400H400V78.75L332.5 211.5L320 400Z" fill="#8A502E"></path><path d="M400 0H128.6L332.5 211.5L400 78.75V0Z" fill="#8A502E"></path></g></g><defs><filter id="filter0_f_17_60" x="-159.933" y="-159.933" width="719.867" height="719.867" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"> </feBlend><feGaussianBlur stdDeviation="79.9667" result="effect1_foregroundBlur_17_60"></feGaussianBlur> </filter></defs></svg>
    <div className="flex flex-col lg:flex-row mb-[5rem] lg:pt-[8rem] relative z-[40]">
      <div className="ml-[8%] flex flex-col p-2 mt-4 lg:mt-[14vh] z-[5]">
        <p
          className="m-[0.5rem] text-[2rem] lg:text-[2rem] tracking-[0.08em] lg:w-[30rem] text-white font-bold"
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
          className="m-[0.5rem] text-[1.7rem] lg:text-[3rem] 2xl:text-[3rem] tracking-[0.12em] lg:w-fit text-white font-bold"
          data-aos="fade-down"
        >
          Enjoy Vacations
        </h1>
        <p
          className="m-[0.5rem] text-[1.7rem] relative lg:text-[3rem] 2xl:text-[3rem] lg:w-[40rem] text-white font-bold"
          data-aos="fade-down"
        >
          With{" "}
          <span className="italic font-medium z-[10]">EurostarInn Hotel</span>
        </p>
        <button className="ml-[0.5rem] border-none bg-[#ab6034] tetx-[1.1rem] lg:text-[1.2rem] text-white w-fit py-6 px-10 mt-6 hover:bg-[#1f1c1b] border-[4px] hover:border-white">
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
      <div className="w-full bg-gradient-to-br from-[#1d1b1a] via-[#8A502E]  to-[#1d1b1a]  from-black via-transparent to-ab6034 bg-cover bg-center animate-color h-[100px] flex">
        <div
          className="flex w-[400px] rounded-full justify-end items-end absolute left-[2rem] bottom-[3rem] bg-gradient-to-br from-black via-transparent to-ab6034"
          data-aos="fade-right"
        >
          <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#8A502E"
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
