import React from "react";
import { Link } from "react-router-dom";
import { rooms, facilities } from "../../components/constants/data";

const BriefSummary: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col w-fit m-auto justify-center items-center lg:flex-row pt-[5rem] lg:pt-[8rem] z-[30]">
        <div className="flex flex-col w-fit m-auto lg:flex-row mb-[4rem] justify-center items-center lg:p-[1rem]">
          <div className="justify-center items-center w-fit p-6 ">
            <div className="w-fit m-auto grid justify-center items-center grid-cols-2 gap-2 ">
              <img
                src="/assets/images/toilet1.jpg"
                className="2xl:w-[26rem] lg:w-[16rem] lg:h-[18rem] 2xl:h-[22rem]"
                alt="toilet1"
              />
              <div className="flex-1 justify-center items-center rounded-full  p-2 bg-[#ab6034] ml-4  w-[12rem] h-[12rem]">
                <svg
                  className=" ml-9 mt-9 w-[6rem] h-[6rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                >
                  <path
                    d="M41.6406 40.625H43.6719V42.6562H41.6406V40.625ZM33.5156 30.4688H31.4844V32.5H33.5156V30.4688ZM23.3594 30.4688H21.3281V32.5H23.3594V30.4688ZM33.5156 40.625H31.4844V42.6562H33.5156V40.625ZM21.3281 42.6562H23.3594V40.625H21.3281V42.6562ZM41.6406 32.5H43.6719V30.4688H41.6406V32.5ZM63.9844 62.9688C63.9844 63.5294 63.5304 63.9844 62.9687 63.9844H2.03125C1.46961 63.9844 1.01563 63.5294 1.01563 62.9688C1.01563 62.4081 1.46961 61.9531 2.03125 61.9531H13.2031V23.3594C13.2031 22.8008 13.6602 22.3438 14.2187 22.3438H50.7812C51.3398 22.3438 51.7969 22.8008 51.7969 23.3594V61.9531H62.9687C63.5304 61.9531 63.9844 62.4081 63.9844 62.9688ZM29.4531 33.5156C29.4531 34.0742 29.9102 34.5312 30.4687 34.5312H34.5312C35.0898 34.5312 35.5469 34.0742 35.5469 33.5156V29.4531C35.5469 28.8945 35.0898 28.4375 34.5312 28.4375H30.4687C29.9102 28.4375 29.4531 28.8945 29.4531 29.4531V33.5156ZM29.4531 43.6719C29.4531 44.2305 29.9102 44.6875 30.4687 44.6875H34.5312C35.0898 44.6875 35.5469 44.2305 35.5469 43.6719V39.6094C35.5469 39.0508 35.0898 38.5938 34.5312 38.5938H30.4687C29.9102 38.5938 29.4531 39.0508 29.4531 39.6094V43.6719ZM19.2969 33.5156C19.2969 34.0742 19.7539 34.5312 20.3125 34.5312H24.375C24.9336 34.5312 25.3906 34.0742 25.3906 33.5156V29.4531C25.3906 28.8945 24.9336 28.4375 24.375 28.4375H20.3125C19.7539 28.4375 19.2969 28.8945 19.2969 29.4531V33.5156ZM20.3125 44.6875H24.375C24.9336 44.6875 25.3906 44.2305 25.3906 43.6719V39.6094C25.3906 39.0508 24.9336 38.5938 24.375 38.5938H20.3125C19.7539 38.5938 19.2969 39.0508 19.2969 39.6094V43.6719C19.2969 44.2305 19.7539 44.6875 20.3125 44.6875ZM41.6406 49.7656C41.6406 49.207 41.1836 48.75 40.625 48.75H24.375C23.8164 48.75 23.3594 49.207 23.3594 49.7656V61.9531H25.3906V50.7812H31.4844V61.9531H33.5156V50.7812H39.6094V61.9531H41.6406V49.7656ZM45.7031 39.6094C45.7031 39.0508 45.2461 38.5938 44.6875 38.5938H40.625C40.0664 38.5938 39.6094 39.0508 39.6094 39.6094V43.6719C39.6094 44.2305 40.0664 44.6875 40.625 44.6875H44.6875C45.2461 44.6875 45.7031 44.2305 45.7031 43.6719V39.6094ZM45.7031 29.4531C45.7031 28.8945 45.2461 28.4375 44.6875 28.4375H40.625C40.0664 28.4375 39.6094 28.8945 39.6094 29.4531V33.5156C39.6094 34.0742 40.0664 34.5312 40.625 34.5312H44.6875C45.2461 34.5312 45.7031 34.0742 45.7031 33.5156V29.4531ZM45.7031 20.3125V17.2656C45.7031 16.1454 44.7921 15.2344 43.6719 15.2344H21.3281C20.2079 15.2344 19.2969 16.1454 19.2969 17.2656V20.3125H45.7031ZM36.5625 3.62781H34.319L33.4283 1.61891C33.2658 1.25227 32.9022 1.01562 32.5 1.01562C32.0978 1.01562 31.7342 1.25227 31.5717 1.61992L30.681 3.62883H28.4375C28.0384 3.62883 27.6778 3.86141 27.5123 4.225C27.3477 4.58758 27.4107 5.01312 27.6727 5.31375L29.3445 7.22414L28.6152 9.89016C28.5066 10.2903 28.6508 10.7159 28.9809 10.9677C29.3109 11.2196 29.7629 11.243 30.1163 11.0297L32.5 9.6007L34.8827 11.0277C35.0431 11.1241 35.2239 11.1719 35.4037 11.1719C35.621 11.1719 35.8373 11.1028 36.0171 10.9657C36.3472 10.7148 36.4924 10.2883 36.3827 9.88813L35.6535 7.22211L37.3252 5.31172C37.5873 5.01211 37.6502 4.58656 37.4857 4.22297C37.3222 3.86141 36.9616 3.62781 36.5625 3.62781ZM23.3594 5.65906H21.1159L20.2252 3.65016C20.0627 3.28352 19.6991 3.04688 19.2969 3.04688C18.8947 3.04688 18.5311 3.28352 18.3686 3.65117L17.4779 5.66008H15.2344C14.8352 5.66008 14.4747 5.89266 14.3091 6.25625C14.1446 6.61883 14.2076 7.04437 14.4696 7.345L16.1413 9.25539L15.4121 11.9214C15.3034 12.3216 15.4477 12.7471 15.7777 12.999C16.1078 13.2509 16.5598 13.2742 16.9132 13.0609L19.2969 11.632L21.6795 13.0589C21.84 13.1554 22.0208 13.2031 22.2005 13.2031C22.4179 13.2031 22.6342 13.1341 22.814 12.997C23.1441 12.7461 23.2893 12.3195 23.1796 11.9194L22.4504 9.25336L24.1221 7.34297C24.3841 7.04336 24.4471 6.61781 24.2826 6.25422C24.1191 5.89266 23.7585 5.65906 23.3594 5.65906ZM10.1562 9.72156H7.91273L7.02203 7.71367C6.85953 7.34602 6.49594 7.10938 6.09375 7.10938C5.69156 7.10938 5.32797 7.34602 5.16547 7.71367L4.27477 9.72156H2.03125C1.63211 9.72156 1.27156 9.95414 1.10602 10.3177C0.941486 10.6803 1.00445 11.1059 1.26649 11.4065L2.9382 13.3169L2.20899 15.9829C2.10031 16.383 2.24453 16.8086 2.57461 17.0605C2.90469 17.3123 3.35664 17.3357 3.71008 17.1224L6.09375 15.6945L8.47641 17.1214C8.63687 17.2179 8.81766 17.2656 8.99742 17.2656C9.21477 17.2656 9.43109 17.1966 9.61086 17.0595C9.94094 16.8086 10.0862 16.382 9.97648 15.9819L9.24726 13.3159L10.919 11.4055C11.181 11.1059 11.244 10.6803 11.0795 10.3167C10.9159 9.95516 10.5554 9.72156 10.1562 9.72156ZM49.7656 5.65906H47.5221L46.6314 3.65016C46.4689 3.28352 46.1053 3.04688 45.7031 3.04688C45.3009 3.04688 44.9373 3.28352 44.7748 3.65117L43.8841 5.66008H41.6406C41.2415 5.66008 40.8809 5.89266 40.7154 6.25625C40.5509 6.61883 40.6138 7.04437 40.8759 7.345L42.5476 9.25539L41.8184 11.9214C41.7097 12.3216 41.8539 12.7471 42.184 12.999C42.5141 13.2509 42.966 13.2742 43.3194 13.0609L45.7031 11.632L48.0858 13.0589C48.2462 13.1554 48.427 13.2031 48.6068 13.2031C48.8241 13.2031 49.0405 13.1341 49.2202 12.997C49.5503 12.7461 49.6955 12.3195 49.5859 11.9194L48.8566 9.25336L50.5284 7.34297C50.7904 7.04336 50.8534 6.61781 50.6888 6.25422C50.5253 5.89266 50.1648 5.65906 49.7656 5.65906ZM63.894 10.3177C63.7284 9.95516 63.3679 9.72156 62.9687 9.72156H60.7252L59.8345 7.71266C59.672 7.34602 59.3084 7.10938 58.9062 7.10938C58.5041 7.10938 58.1405 7.34602 57.978 7.71367L57.0873 9.72258H54.8437C54.4446 9.72258 54.0841 9.95516 53.9185 10.3187C53.754 10.6813 53.8169 11.1069 54.079 11.4075L55.7507 13.3179L55.0215 15.9839C54.9128 16.3841 55.057 16.8096 55.3871 17.0615C55.7182 17.3123 56.1691 17.3367 56.5226 17.1234L58.9062 15.6945L61.2889 17.1214C61.4494 17.2179 61.6301 17.2656 61.8099 17.2656C62.0273 17.2656 62.2436 17.1966 62.4234 17.0595C62.7534 16.8086 62.8987 16.382 62.789 15.9819L62.0598 13.3159L63.7315 11.4055C63.9955 11.1069 64.0585 10.6813 63.894 10.3177Z"
                    fill="white"
                  ></path>
                </svg>
              </div>

              <div className="px-10 py-6 ml-10 md:left-[12rem] top-[180vh] lg:top-[215vh] 2xl:top-[170vh] left-[1rem] lg:flex flex-col w-fit bg-[#ab6034] p-[1rem] text-white">
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
              <img
                src="/assets/images/toilet2.jpg"
                className="w-[16rem] 2xl:w-[26rem] lg:h-[18rem] 2xl:h-[22rem] mb-[1rem] "
                alt="toilet2"
              />
            </div>
          </div>

          <div className="lg:max-w-[46vw] p-4">
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
                className="rounded-full w-[5rem] h-[5rem] mr-[2rem] m-[1rem] border-[2px] border-amber-950"
                src="/assets/images/ravisir-onewon.jpg"
                alt="Ravi Sir"
              />
              <div className="flex flex-col p-[1rem] relative lg:left-[-2rem] m-[1rem]">
                <h1 className="text-[1.4rem] text-medium">Ravi Kumar Mishra</h1>
                <p className="text-[1.1rem] text-gray-600">CEO & Founder</p>
              </div>
              <div className="w-[18rem] text-[2.3rem] italic h-[4rem] m-[1rem]">
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
