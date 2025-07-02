import Footer from "./(main)/footer";
import Header from "./(main)/header";
import Ourindicators from "./components/landingPage/ourindicators/Ourindicators";
import Specialoffers from "./components/landingPage/specialoffers/Specialoffers";
import SwiperCarusel from "./components/landingPage/swiper";

export default function Landing() {
  return (
    <div className="container mx-auto">
      <main>
        <Header role="landing" />
        <SwiperCarusel />
        <Specialoffers />
        <Ourindicators />
        <Footer />
      </main>
    </div>
  );
}
