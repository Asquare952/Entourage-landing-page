import "./testimonals.css"
import * as  FaIcon from "react-icons/fa";
import TestimonalAvatar from "../../assets/testimonal-avatar.png";
const Testimonals = () => {
  return (
    <>
      <section className="textimonal-main-container">
        <div className="testimonail-sub-container">
          <div className="testimonail-contents">
            <div className="testimonal-header">
              <div className="testimonal-title">
                <h4>What Our Customers Say</h4>
              </div>
              <div className="testimonail-slide">
                <button className="backward-arrow">
                  <FaIcon.FaArrowLeft className="arr" />
                  {/* <img src={BackwardArrow} alt="" /> */}
                </button>
                <button className="forward-arrow">
                  <FaIcon.FaArrowRight className="arr" />
                  {/* <img src={ForwardIcon} alt="" /> */}
                </button>
              </div>
            </div>
            <div className="testimonal">
              <p>
                “I was really impressed with the level of service I received
                from this car rental company. The process was smooth and easy,
                and the car I rented was in excellent condition. The staff was
                friendly and helpful, and I felt well taken care of throughout
                my rental period. I would definitely recommend this company to
                anyone looking for a premium car rental experience.”
              </p>
            </div>
            <div className="testimonal-avatar">
              <div className="avatar">
                <img src={TestimonalAvatar} alt="" />
              </div>
              <div className="avatar-name">
                <p>Lokman Hossain</p>
                <span>From Texas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Testimonals;