import "./about.css";
import AboutImg from "../../assets/about-img (2).png";
const AboutUs = () => {
  return (
    <>
      <section className="about-main-container" id="about">
        <div className="about-sub-container">
          <div className="about-head">
            <p>Your journey starts here with our wheels at your command.</p>
          </div>
          <div className="about-flex">
            <div className="about-left">
              <img src={AboutImg} alt="" />
            </div>
            <div className="about-right">
              <div className="about-title">
                <h4>Entourage</h4>
              </div>
              <p>
                ENTOURAGE is a luxury car hire platform employing the use of
                technology in providing a unique solution to the growing demand
                for car rentals in Nigeria with more emphasis on comfort, ease
                of access, convenience and luxury.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
