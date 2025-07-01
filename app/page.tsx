import Footer from "./(main)/footer";
import Header from "./(main)/header";
import Ourindicators from "./components/home/ourindicators/Ourindicators";
import Specialoffers from "./components/home/specialoffers/Specialoffers";
import SwiperCarusel from "./components/home/swiper";

export default function Landing() {
  return (
    <div className="container mx-auto">
      <main>
        <Header />
        <SwiperCarusel />
        <Specialoffers />
        <Ourindicators />
        <Footer />
      </main>
    </div>
  );
}
