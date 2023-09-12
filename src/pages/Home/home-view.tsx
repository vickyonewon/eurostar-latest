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
import "./home.css";
import DoneIcon from "@mui/icons-material/Done";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeController from "./home-controller";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";


const Top=()=>(
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
                  className="lg:h-[28rem] h-[25rem] w-[50rem]"
                  src="/assets/images/front2.jpg"
                  alt="gallery"
                />
              </div>
              <div>
                <img
                  className="lg:h-[28rem] h-[24rem] w-[50rem]"
                  src="/assets/images/garden.jpg"
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
)

const BriefSummary=()=>(
  <div>
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
                className="absolute lg:left-[6rem] md:left-[12rem] top-[190vh] md:top-[190vh] left-[1rem] flex flex-col w-fit bg-[#ab6034] p-[1rem] text-white"
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
          <div className="text-[2.5rem] font-medium w-[fit] lg:w-[30rem] ml-[2rem]">
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
        <div className={`flex flex-col lg:flex-row justify-center items-center p-[1.5rem] relative z-[5] bg_gradient_sharp`}>
          {rooms.map((room) => (
            <div key={room.id} className="w-fit lg:w-[29rem] m-[0.8rem] bg-white overflow-hidden">
              <Link to={`/rooms/${room.id}`}>
              <img
                className="w-[100%] h-[18rem] cursor-pointer duration-1000 hover:scale-110"
                src={`/assets/images/${room.image}`}
                alt="room"
              />
              </Link>
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
                    ₹{room.price}
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
            {facilities.map((fac, index) => (
              <div key={index} className="flex flex-row p-[1rem] mb-[1rem]">
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
  </div>
)

const QualityShow=()=>{
  const useHomeController=HomeController();
  return (
  <div>
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
          {suites.map((suite, index) => (
            <div key={index} className="flex flex-col" data-aos="fade-up">
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
                        ₹{suite.price}
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
                    alt="restaurant"
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
          poster="../assets/images/front1.jpg"
          controls
        />
      </div>

      <div className="flex flex-col lg:flex-row p-[2rem] pt-[8rem] pb-[8rem]">
        <div className="flex flex-col w-full lg:w-5/12 p-[1rem]">
          <p className="text-[1.1rem] font-semibold text-[#ab6034] m-[1rem]">
            Food & Drink
          </p>
          <h1 className="text-[2.5rem] font-semibold ml-[1rem]">
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
          <button className="text-[1.1rem] w-fit mt-[3rem] ml-[2rem] font-medium text-gray-600 p-[0.5rem] border-[1px] border-gray-400">
            Learn More Us {" >"}
          </button>
        </div>
        <div className="w-full lg:w-7/12">
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
 )
}

const BookRoom=()=>{
  const useHomeController = HomeController();
 return (
  <div className="flex flex-col lg:flex-row bg-[#1d1b1a] pt-[6rem] p-[2rem] pb-[6rem]">
      <div className="flex flex-col bg-white w-full lg:w-5/12 p-[2rem] h-fit duration-100" data-aos="fade-up">
          <p className="text-[1.2rem] text-[#ab6034] ml-[1rem]">
            Booking Your Room
          </p>
          <h1 className="text-[2.3rem] m-[1rem]">Find & Booked Your Room</h1>
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
              className=" p-[0.5rem]"
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
              className=" p-[0.5rem]"
              placeholder="Children"
            />
          </div>
          {/* <input type="date" className="w-full border-gray-300 border-b-[1px] p-[0.5rem] m-[1rem] mb-[1.5rem]" placeholder="Check-out" />
          <input type="number" className="w-full border-gray-300 border-b-[1px] p-[0.5rem] m-[1rem] mb-[1.5rem] text-[1.3rem] font-black" placeholder="Adults" />
          <input type="number" className="w-full border-gray-300 border-b-[1px] p-[0.5rem] m-[1rem] mb-[1.5rem] text-[1.3rem] font-black" placeholder="Children" /> */}
          <button className="m-[1rem] w-[100%] text-white font-medium bg-[#ab6034] text-[1.1rem] text-center hover:text-white py-[0.9rem] px-6 mt-6 mb-[2rem] border border-gray-400">
            Search Now{" "}
            <SearchIcon style={{ fontSize: "1.5rem" }} className="ml-[1rem]" />
          </button>
        </div>

        

<div className="flex flex-col w-[100%] lg:w-[50rem] p-[2rem] lg:pl-[4rem]">
          <p className="text-[1.3rem] font-medium text-[#ab6034] m-[1rem]">
            Our Testimonials
          </p>
          <h1 className="text-[2.5rem] font-medium text-white m-[1rem] mb-[2rem]">
            What Our Customer Say Us
          </h1>

          <div className="flex flex-col lg:flex-row">
            <Slider
              ref={useHomeController.sliderRef}
              {...useHomeController.settings2}
              className="w-full lg:w-[85%] h-fit pb-[2rem]"
            >
              {customers.map((cust, index) => (
                <div key={index} className="flex flex-col p-[1rem] lg:p-[2rem] pt-[4rem] bg-[#0c0b0b] w-[100%] lg:w-fit m-[1rem] min-h-[20rem]">
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
)
}

const News=()=>(
  <div>
     <div className="flex flex-col pt-[7rem] pb-[5rem]">
        <h1 className="text-[2.5rem] font-semibold text-center m-auto w-[90%] lg:w-[40rem]" data-aos="fade-right">
          Stay With Us & Get More Updates Latest News & Blog
        </h1>
        <div className="flex flex-col lg:flex-row p-[rem] lg:p-[2rem] bg-[#f4f4f4]" data-aos="fade-left">
          {news.map((ne, index) => (
            <div key={index} className="flex flex-col w-[95%] lg:w-[30rem] m-[1rem] bg-white">
              <img
                className="w-[95%] lg:w-full h-[18rem]"
                src={`../assets/images/${ne.image}`}
                alt="news"
              />
              <h1 className="text-[1.5rem] font-medium m-[1rem]">{ne.title}</h1>
              <div className="flex flex-row m-[1rem]">
                <p className="mr-[2rem]">
                  <PersonIcon style={{ fontSize: "1.4rem" }} /> {ne.author}
                </p>
                <p>
                  <CalendarMonthIcon style={{ fontSize: "1.3rem" }} /> {ne.date}
                </p>
              </div>
              <p className="m-[1rem] text-gray-500 text-[1.1rem]">
                {ne.subTitle}
              </p>
              <button className="m-[1rem] text-[1.1rem] hover:text-[#ab6034] font-semibold text-left text-gray-600">
                View Post {" >"}
              </button>
            </div>
          ))}
        </div>
      </div>
  </div>
)

const Home = () => {
  return (
    <div>
      <Navbar />
      <Top />
      <BriefSummary />
      <QualityShow />
      <BookRoom />
      <News />
    </div>
  );
};

export default Home;





















































































































































































































