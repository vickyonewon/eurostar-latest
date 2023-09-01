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


const Home = () => {
  const [activeItem, setActiveItem] = useState(0);
  const sliderRef=useRef<Slider | null>(null);

  var settings = {
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: false,
  };
  var settings2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: false,
    initialSlide: activeItem,
  };
  const handleStateChange = (newStateValue: number) => {
    // Update the activeItem state when your state changes
    setActiveItem(newStateValue);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(newStateValue);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });
  });

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

      

    </div>
  );
};

export default Home;





































































































































































































































