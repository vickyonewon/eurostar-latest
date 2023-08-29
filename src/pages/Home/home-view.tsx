import Navbar from "../../components/navbar/navbar-view";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Home = () => {
  return (
    <div>
      <div className="bg-[url('./images/brown-bg.jpg')] bg-cover bg-no-repeat h-[110vh]">
        <Navbar textColor="white" />
        <div className="flex flex-col md:flex-row mt-[5rem] relative">
          <div className="ml-[2rem] p-2 mt-[6rem] z-[5]">
            <p className="text-[1.3rem] tracking-[0.08em] w-[30rem] text-white font-bold">
              Welcome Home
            </p>
            <h1 className="text-[3.5rem] tracking-[0.12em] w-[30rem] text-white font-bold">
              Enjoy Vacations
            </h1>
            <p className="text-[3.5rem] w-fit absolute leading-[4rem] text-white font-bold">
              With <span className="italic font-medium z-[10]">EurostarInn Hotel</span>
            </p>
          </div>
          <div className="z-[2] relative right-[5rem] mt-[2rem]">
          <Carousel interval={2000} autoPlay={true} infiniteLoop={true} width={800} showThumbs={false} className="" >
                <div className="">
                    <img className="h-[28rem]" src={require('../../images/gallery.jpg')} alt="gallery" />
                </div>
                <div>
                    <img className="h-[28rem]" src={require('../../images/home_restro.jpg')} alt="restro" />
                </div>
                <div>
                    <img className="h-[28rem]" src={require('../../images/home_room.jpg')} alt="room" />
                </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
