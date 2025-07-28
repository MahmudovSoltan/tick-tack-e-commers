

import HomeLeft from "@/app/components/home/HomeLeft"
import Header from "../header"
import './css/home.css'
import HomeRight from "@/app/components/home/HomeRight"
const Home = () => {
  return (
    <div >
      <div className="container mx-auto">
        <Header role="home" />
      </div>
      <section className="home_section">
        <div className="container mx-auto flex gap-8">
          <HomeLeft />
          <HomeRight />
        </div>
      </section>
    </div>
  )
}

export default Home