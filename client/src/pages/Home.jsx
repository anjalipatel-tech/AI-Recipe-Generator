import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadBox from "../components/UploadBox";
import PopularRecipes from "../components/PopularRecipes";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <UploadBox />
      <PopularRecipes />
      <HowItWorks />
      <Features />
      <Footer />
    </>
  );
}

export default Home;