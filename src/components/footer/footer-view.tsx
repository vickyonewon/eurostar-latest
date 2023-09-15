import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import {useEffect} from 'react';
import Aos from "aos";
import "./footer.css";

const footerImages = [
  {
    id: 1,
    image: "deluxe1.jpg",
  },
  {
    id: 2,
    image: "executive1.jpg",
  },
  {
    id: 3,
    image: "luxury1.jpg",
  },
  {
    id: 4,
    image: "standard1.jpg",
  },
];

const Footer = () => {
    useEffect(()=>{
        Aos.init({delay: 2000});
    })
  return (
    <div className="flex flex-col z-[39]">
      <div className="flex flex-row overflow-auto no-scrollbar">
        {footerImages.map((footerImage, index) => (
          <div
            className="relative w-full lg:w-[22rem] h-[25rem]"
            key={index}
          >
            <img
              src={`/assets/images/${footerImage.image}`}
              alt="footerimage"
              className="w-full h-full"
            />
            <div className="animate-move-down relative top-[-24rem] w-full h-full lg:absolute lg:top-0 inset-0 text-center opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-white bg-[#ab6034] no-scrollbar">
              <InstagramIcon
                className="w-fit m-auto h-fit"
                style={{ fontSize: "3rem" }}
              />
              <h1 className="text-[2rem] font-semibold max-w-[10rem] m-auto">
                Follow Our Instagram
              </h1>
              <div className="bg-white m-auto w-[5rem] h-[5px]"></div>
              <p className="text-[1.4rem] mb-[2rem]">Make A Call</p>
              <p className="text-[1.5rem] font-semibold mb-[2rem]">
                +000 0000 00000
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col text-center lg:flex-row pt-[5rem] pb-[4rem] bg-[#201d1b] p-[2rem] lg:justify-between">
        <div className="w-fit max-w-[23rem] m-[1rem]">
          <h1 className="text-white text-[2.5rem] mb-[0.5rem] font-semibold">
            EurostarInn
          </h1>
          <p className="text-gray-400 text-[1.08rem] mb-[0.5rem]">
            Nam libero tempore cum soluta nobis eseligendi optio cumque nihile
            impedit quo minus maxime placeat facere
          </p>
          <div className="flex flex-row w-fit my-[2rem] m-auto ">
            <div className="p-[0.5rem] rounded-full bg-[#0c0b0b] mr-[1.3rem]">
              <FacebookIcon style={{ fontSize: "1.5rem", color: "white" }} />
            </div>
            <div className="p-[0.5rem] rounded-full bg-[#0c0b0b] mr-[1.3rem]">
              <TwitterIcon style={{ fontSize: "1.5rem", color: "white" }} />
            </div>
            <div className="p-[0.5rem] rounded-full bg-[#0c0b0b] mr-[1.3rem]">
              <LinkedInIcon style={{ fontSize: "1.5rem", color: "white" }} />
            </div>
            <div className="p-[0.5rem] rounded-full bg-[#0c0b0b] mr-[1.3rem]">
              <YouTubeIcon style={{ fontSize: "1.5rem", color: "white" }} />
            </div>
          </div>
        </div>
        <div className="w-fit max-w-[20rem] m-auto mb-[2rem] lg:ml-[4rem]">
          <h1 className="text-[1.7rem] text-white">Quick Link</h1>
          <p className="text-gray-400 text-[1.1rem] mt-[0.6rem]">About Us</p>
          <p className="text-gray-400 text-[1.1rem] mt-[0.6rem]">Services</p>
          <p className="text-gray-400 text-[1.1rem] mt-[0.6rem]">Gallery</p>
          <p className="text-gray-400 text-[1.1rem] mt-[0.6rem]">Latest News</p>
          <p className="text-gray-400 text-[1.1rem] mt-[0.6rem]">Contact Us</p>
        </div>
        <div className="w-fit max-w-[20rem] m-auto mb-[2rem] lg:ml-[4rem]">
          <h1 className="text-[1.7rem] text-white">Features</h1>
          <p className="text-gray-400 text-[1.1rem] mt-[0.6rem]">
            Free Transportation
          </p>
          <p className="text-gray-400 text-[1.1rem] mt-[0.6rem]">
            GYM & Fitness Care
          </p>
          <p className="text-gray-400 text-[1.1rem] mt-[0.6rem]">
            SPA Treatment
          </p>
          <p className="text-gray-400 text-[1.1rem] mt-[0.6rem]">
            Food & Drinks
          </p>
          <p className="text-gray-400 text-[1.1rem] mt-[0.6rem]">Breakfast</p>
        </div>
        <div className="w-fit max-w-[20rem] m-auto mb-[2rem] lg:ml-[4rem]">
          <h1 className="text-[1.7rem] text-white">News Letter</h1>
          <input
            type="email"
            className="p-[1.8rem] w-full lg:w-[20rem] h-[3.6rem] text-[1.2rem] text-gray-400 mt-[1rem]"
            placeholder="Email Address"
          />
          <button
            type="submit"
            className="text-white w-full text-[1.2rem] p-[0.8rem] px-[2rem] mt-[1rem] bg-[#ab6034]"
          >
            Subscribe {" >"}
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between bg-[#1d1b1a] p-[2rem]">
        <div className="text-[1.2rem] text-white">
          © 2023 <span className="text-[#ab6034]">EurostarInn</span>. All Rights
          Reserved.
        </div>
        <div className="flex flex-row text-[1.15rem] text-gray-400">
          <p className="mr-[1.5rem]">Terms</p>
          <p className="mr-[1.5rem]">Privacy Policy</p>
          <p className="mr-[1.5rem]">FAQs</p>
          <p className="mr-[1.5rem]">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

