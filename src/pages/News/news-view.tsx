import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {news } from "../../components/constants/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./news.css";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const News = () => (
  <div>
    <div className="flex flex-col pt-[7rem] pb-[5rem] w-fit m-auto justify-center items-center">
      <h1 className="text-[2.2rem] lg:text-[2.5rem] font-semibold text-center m-auto w-[90%] lg:w-[40rem]">
        Stay With Us & Get More Updates Latest News & Blog
      </h1>
      <div className="flex flex-wrap justify-center items-center lg:flex-row p-[rem] lg:p-[2rem] bg-[#f4f4f4]">
        {news.map((ne, index) => (
          <div
            key={index}
            className="relative overflow-hidden group flex flex-col w-[96%] lg:w-[24rem] m-[1rem] bg-white border hover:border-b-4 hover:border-b-[#ab6034]"
          >
            <div className="relative overflow-hidden">
              <img
                className="w-[95%] lg:w-full h-[17rem] duration-1000 group-hover:scale-125"
                src={`../assets/images/${ne.image}`}
                alt="news"
              />
            </div>
            <h1 className="text-[1.5rem] font-medium m-[1rem] group-hover:underline">
              {ne.title}
            </h1>
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
            <button className="m-[1rem] text-[1.1rem] group-hover:text-[#ab6034] font-semibold text-left text-gray-600">
              View Post {" >"}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default News;
