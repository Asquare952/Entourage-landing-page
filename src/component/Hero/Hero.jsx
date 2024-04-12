import "./hero.css";
import NavBar from "../Header/NavBar";
import { useState, useEffect } from "react";
import imageSlider from "../../utils/BgImageData";
export const HeroSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlider[currentImage].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    hight: "833px",
  };
  useEffect(() => {
    // Function to change the current image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageSlider.length);
    }, 3000);

    // Clear the interval when the component unmounts or changes
    return () => clearInterval(interval);
  }, [currentImage]);

  return;
};
const Hero = () => {
  return (
    <>
      <section id="home">
        <div></div>
        <NavBar />
        <div className="hero-content">
          <p>Discover the world on wheels with our car rental service</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
