import React from "react";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import Services from "../../components/Services/Services";
import FeaturedTour from "../../components/FeaturedTour/FeaturedTour";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
const Home = () => {
  return (
    <div>
      <HeroVideo />
      <Services />
      <FeaturedTour />
      <ImageGallery />
    </div>
  );
};

export default Home;
