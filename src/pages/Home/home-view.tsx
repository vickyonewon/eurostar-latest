import { useEffect } from "react";
import Navbar from "../../components/navbar/navbar-view";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div>
      <div className="bg-[url('./images/brown-bg.jpg')] bg-cover bg-no-repeat h-[120vh]">
        <Navbar textColor="white" />
        <div className="flex flex-col lg:flex-row mt-0 lg:mb-[18rem] mb-[5rem] lg:mt-[5rem] relative z-[40]">
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
                  src={require("../../images/gallery.jpg")}
                  alt="gallery"
                />
              </div>
              <div>
                <img
                  className="lg:h-[28rem] h-[24rem] w-[50rem]"
                  src={require("../../images/home_restro.jpg")}
                  alt="restro"
                />
              </div>
              <div>
                <img
                  className="lg:h-[28rem] h-[24rem] w-[50rem]"
                  src={require("../../images/home_room.jpg")}
                  alt="room"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="justify-center items-center">
            <div className="w-fit m-auto">
            <img
              src={require("../../images/hotelstarsicon.jpeg")}
              className="rounded-full absolute left-[17rem] md:left-[30rem] md:top-[150vh] lg:left-[17rem] top-[140vh] lg:top-[130vh] w-[10rem] h-[10rem] m-[1rem] lg:ml-[2rem]"
              alt="hotel-star-icon"
              data-aos="fade-right"
            />
            <img
              src={require("../../images/toilet1.jpg")}
              className="w-[15rem] h-[15rem] m-[1rem] lg:ml-[2rem]"
              alt="toilet1"
            />
            <img
              src={require("../../images/toilet2.jpg")}
              className="w-[15rem] h-[17rem] m-[1rem] lg:ml-[18rem] ml-[13rem]"
              alt="toilet2"
            />
            <div className="absolute lg:left-[6rem] md:left-[12rem] top-[180vh] md:top-[190vh] left-[1rem] lg:top-[176vh] flex flex-col w-fit bg-[#ab6034] p-[1rem] text-white" data-aos="fade-up">
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
            <p className="text-[#ab6034] text-[1.2rem] m-[1rem]">
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
                  <h1 className="text-[1.5rem] font-medium">Trusted Partners</h1>
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
                className="rounded-full w-[4rem] h-[4rem] mr-[2rem] m-[1rem]"
                src={require("../../images/toilet3.jpg")}
                alt="toilet3"
              />
              <div className="flex flex-col p-[1rem] relative lg:left-[-2rem] m-[1rem]">
                <h1 className="text-[1.4rem] text-medium">Robert Ravi Mishra</h1>
                <p className="text-[1.1rem] text-gray-600">CEO & Founder</p>
              </div>
              <img
                className="w-[18rem] h-[4rem] m-[1rem]"
                src={require("../../images/toilet4.jpg")}
                alt="toilet4"
              />
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
