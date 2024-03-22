import "./about.css";
import AboutImg from "../../images/about-img.png";
const AboutUs = () => {
  return (
    <>
      <section className="about-main-container">
        <div className="about-sub-container">
          <div className="about-title">
            <h4>Entourage</h4>
          </div>
          <div className="about-flex">
            <div className="about-left">
              <p>
                ENTOURAGE is a luxury car hire platform employing the use of
                technology in providing a unique solution to the growing demand
                for car rentals in Nigeria with more emphasis on comfort, ease
                of access, convenience and luxury.
              </p>
            </div>
            <div className="about-right">
              <img src={AboutImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
