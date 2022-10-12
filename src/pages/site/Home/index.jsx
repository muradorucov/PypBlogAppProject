import Footer from "../../../components/common/footer/Footer";
import Navbar from "../../../components/common/navbar";
import Discover from "../../../components/home/discover/Discover";
import Hero from "../../../components/home/hero/Hero";
import Homes from "../../../components/home/mainContent/homes/Home";

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Homes />
      <Discover />
      <Footer/>
    </div>
  );
}

export default Home;
