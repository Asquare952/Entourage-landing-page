import "./howitworks.css";
import SearchIcon from "../../images/search-lg.png";
import CallenderCheckIcon from "../../images/calendar-check-02.png";
import SmileEmoji from "../../images/face-happy.png";
import Jeep from "../../images/jeep.png";
const HowItWorks = () => {
  return (
    <>
      <section className="how-it-works-main-container">
        <div className="how-it-works-sub-container">
          <div className="how-it-works-header">
            <div className="how-it-works-title">
              <h4>How it woks</h4>
              {/* <div className="how-it-works-title-left">
                <button className="how-it-works-btn">I need a car</button>
                <button className="how-it-works-btn">I am a dealer</button>
              </div> */}
            </div>
            <div className="how-it-works-description">
              <p>
                Renting a luxury car has never been easier. Our streamlined
                process makes it simple for you to book and confirm your vehicle
                of choice online
              </p>
            </div>
          </div>

          <div className="how-it-works-flex">
            <div className="how-it-works-left">
              <div className="how-it-works-left-content">
                <div className="left-content-left">
                  <img src={SearchIcon} alt="" />
                </div>
                <div className="left-content-right">
                  <div className="left-content-right-title">
                    <h4>Browse and select</h4>
                  </div>
                  <div className="left-content-right-desc-one">
                    <p>
                      Choose from our wide range of premium cars, select the
                      pickup and return dates and locations that suit you best.
                    </p>
                  </div>
                </div>
              </div>
              <div className="how-it-works-left-content">
                <div className="left-content-left">
                  <img src={CallenderCheckIcon} alt="" />
                </div>
                <div className="left-content-right">
                  <div className="left-content-right-title">
                    <h4>Book and confirm</h4>
                  </div>
                  <div className="left-content-right-desc-two">
                    <p>
                      Book your desired car with just a few clicks and receive
                      an instant confirmation via email or SMS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="how-it-works-left-content">
                <div className="left-content-left">
                  <img src={SmileEmoji} alt="" />
                </div>
                <div className="left-content-right">
                  <div className="left-content-right-title">
                    <h4>Enjoy your ride</h4>
                  </div>
                  <div className="left-content-right-desc-three">
                    <p>
                      Pick up your car at the designated location and enjoy your
                      premium driving experience with our top-quality service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="how-it-works-right">
              <div className="how-it-works-right-content">
                <img src={Jeep} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
