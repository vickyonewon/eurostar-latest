import { useEffect } from "react";
import Navbar from "../../components/navbar/navbar-view";
import HeroSection from "../HeroSection";
import BriefSummary from "../BriefSummary";
import QualityShow from "../QualityShow";
import BookRooms from "../BookRoom";
import News from "../News";

const Home = () => {
  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BriefSummary />
      <QualityShow />
      <BookRooms />
      <News />
    </div>
  );
};

export default Home;
