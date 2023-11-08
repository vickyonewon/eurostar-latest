import React from "react";
import { Link} from "react-router-dom";
import { rooms, facilities } from "../../components/constants/data";

const BriefSummary: React.FC = () => {
    return (
      <div>
      <div className="flex flex-col w-fit m-auto justify-center items-center lg:flex-row pt-[5rem] lg:pt-[8rem] z-[30]">
        <div className="flex flex-col w-fit m-auto lg:flex-row mb-[4rem] justify-center items-center lg:p-[4rem]">
          <div className="justify-center items-center w-fit">
            <div className="w-fit m-auto">
              <img
                src="/assets/images/hotelstarsicon.jpeg"
                className="hidden lg:block drop-shadow-2xl rounded-full absolute left-[20vw] w-[8rem] h-[8rem] lg:top-[180vh] 2xl:top-[140vh] m-[1rem] xl:ml-[16vw]"
                alt="hotel-star-icon"
              />
              <img
                src="/assets/images/toilet1.jpg"
                className="hidden lg:block 2xl:w-[20rem] lg:w-[16rem] lg:h-[18rem] 2xl:h-[21rem] m-[1rem] lg:ml-[10vw]"
                alt="toilet1"
              />
              <img
                src="/assets/images/toilet2.jpg"
                className="w-[16rem] 2xl:w-[20rem] lg:h-[18rem] 2xl:h-[21rem] mb-[1rem] lg:m-[1rem] lg:mr-[8vw] xl:ml-[25vw]"
                alt="toilet2"
              />
              <div className="hidden absolute lg:left-[15vw] md:left-[12rem] top-[180vh] lg:top-[215vh] 2xl:top-[170vh] left-[1rem] lg:flex flex-col w-fit bg-[#ab6034] p-[1rem] text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  className="bi bi-play w-[12rem]"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                </svg>
                <p className="text-[1.2rem] lg:text-[1.5rem]">Watch Latest</p>
                <p className="italic">Videos</p>
              </div>
            </div>
          </div>
  
          <div className="lg:max-w-[46vw]">
            <p className="text-[#ab6034] font-semibold text-[1.2rem] m-[1rem]">
              About Company
            </p>
            <h1 className="m-[1rem] text-[2rem] lg:text-[2.5rem] tracking-[.1em] font-semibold max-w-[40rem]">
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
                className="rounded-full w-[5rem] h-[5rem] mr-[2rem] m-[1rem] border-[2px] border-amber-950"
                src="/assets/images/ravisir-onewon.jpg"
                alt="Ravi Sir"
              />
              <div className="flex flex-col p-[1rem] relative lg:left-[-2rem] m-[1rem]">
                <h1 className="text-[1.4rem] text-medium">Ravi Kumar Mishra</h1>
                <p className="text-[1.1rem] text-gray-600">CEO & Founder</p>
              </div>
              <div
                className="w-[18rem] text-[2.3rem] italic h-[4rem] m-[1rem]"
              >
                Ravi Mishra
                </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row 2xl:w-[80vw] 2xl:m-auto justify-between mb-[1.5rem]">
          <div className="text-[2rem] lg:text-[2.2rem] lg:text-[2.5rem] font-medium w-[fit] lg:w-[30rem] ml-[2rem]">
            Take A Look At Our Luxury Rooms and Hotel
          </div>
          <div className="">
            <button className="border-none bg-[#ab6034] text-[1.1rem] text-white w-fit py-4 px-6 mt-6 m-[2rem] hover:bg-[#1f1c1b] border-[4px] hover:border-white">
              Explore Rooms {" >"}
            </button>
          </div>
        </div>
        {/* <div className="hidden lg:block lg:bg-[#1c1a19] lg:h-[25rem] lg:relative" /> */}
        <div
          className={`flex flex-col lg:flex-row justify-center items-center p-[1.5rem] relative z-[5] bg_gradient_sharp`}
        >
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group w-fit lg:w-[26rem] m-[0.8rem] bg-white overflow-hidden"
            >
              <div className="overflow-hidden">
                <Link to={`/rooms/${room.id}`}>
                  <img
                    className="w-[100%] h-[18rem] cursor-pointer duration-[3000ms] group-hover:scale-125"
                    src={`/assets/images/${room.image}`}
                    alt="room"
                  />
                </Link>
              </div>
              <div className="flex flex-col p-[1rem] py-[2rem]">
                <h1 className="text-[1.8rem] font-bold my-[0.7rem]">
                  {room.title}
                </h1>
                <div className="flex flex-row">
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
              <Link to={`/rooms/${room.id}`}>
              <button className="border-none w-[100%] font-bold bg-[#eeeceb] group-hover:bg-[#ab6034] group-hover:text-white text-black hover:bg-[#ab6034] text-[1.1rem] text-center hover:text-white py-[0.7rem] px-6 mt-6 border-[4px] hover:border-white">
                Book Now {" >"}
              </button>
              </Link>
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
                <div className=" text-white mb-[1rem] mr-[1.3rem]">
                  {<fac.icon style={{ fontSize: "3rem" }} />}
                </div>
                <div className="flex flex-col">
                  <div className="text-[1.5rem] text-white font-semibold">
                    {fac.title}
                  </div>
                  <div className="text-[1.1rem] text-gray-400 w-[18rem] mt-[1rem]">
                    {fac.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefSummary;
