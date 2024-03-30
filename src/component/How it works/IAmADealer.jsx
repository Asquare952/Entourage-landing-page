import Jeep from "../../assets/jeep.png";
// import Works from "../../HowItWorksData";
// import { useState } from "react";
const IAmADealer = () => {
  // const [howItWorks, setHowItWorks] = useState(Works);
  return (
    <>
      <div className="dealer-flex">
        <div className="dealer-left">
          <img src={Jeep} alt="" className="dealer-left-img" />
        </div>
        {/* {howItWorks.map((Iamadealer) => {
          const { id, title, desc, image } = Iamadealer;
          return (
            <div className="dealer-right" key={id}>
              <div className="dealer-right-content">
                <div className="right-content-left">
                  <img src={image} alt={image} />
                </div>
                <div className="right-container">
                  <div className="right-container-title">
                    <h4>{title}</h4>
                  </div>
                  <div className="right-container-desc">
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default IAmADealer;
