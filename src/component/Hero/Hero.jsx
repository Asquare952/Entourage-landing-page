import "./hero.css";
import { Header } from "..";
const Hero = () => {
  return (
    <>
      <section className="hero" id="home">
        <Header/>
        <div className="hero-content">
          <p>Discover the world on wheels with our car rental service</p>
        </div>
      </section>
    </>
  );
}
 
export default Hero;