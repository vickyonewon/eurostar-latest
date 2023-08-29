import {useEffect} from 'react';
import Navbar from "../../components/navbar/navbar-view";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>{
    AOS.init({duration: 3000});
  })
  return (
    <div>
      <div className="bg-[url('./images/brown-bg.jpg')] bg-cover bg-no-repeat h-[110vh]">
        <Navbar textColor="white" />
        <div className="flex flex-col md:flex-row mt-0 md:mt-[5rem] relative z-[40]">
          <div className="ml-[2rem] flex flex-col p-2 mt-4 md:mt-[6rem] z-[5]">
            <p className="text-[1.4rem] md:text-[1.3rem] tracking-[0.08em] md:w-[30rem] text-white font-bold" data-aos='fade-down'>
              Welcome Home
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] tracking-[0.12em] md:w-[30rem] text-white font-bold" data-aos='fade-down'>
              Enjoy Vacations
            </h1>
            <p className="text-[2rem] relative md:text-[3.5rem] md:w-[40rem] text-white font-bold" data-aos='fade-down'>
              With <span className="italic font-medium z-[10]">EurostarInn Hotel</span>
            </p>
            <button data-aos='fade-up' className='border-none bg-[#ab6034] text-[1.1rem] text-white w-fit py-4 px-6 mt-6 hover:bg-[#1f1c1b] border-[4px] hover:border-white'>Explore Our Rooms {' >'}</button>
          </div>
          <div className="z-[2] relative md:absolute md:w-[50rem] md:right-[5rem] mt-[2rem]" data-aos='fade-left'>
          <Carousel interval={4000} autoPlay={true} infiniteLoop={true} showThumbs={false} className="" >
                <div className="justify-center items-center">
                    <img className="md:h-[28rem] h-[20rem] w-[50rem]" src={require('../../images/gallery.jpg')} alt="gallery" />
                </div>
                <div>
                    <img className="md:h-[28rem] h-[20rem] w-[50rem]" src={require('../../images/home_restro.jpg')} alt="restro" />
                </div>
                <div>
                    <img className="md:h-[28rem] h-[20rem] w-[50rem]" src={require('../../images/home_room.jpg')} alt="room" />
                </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
