import Jeep from "../../assets/jeep.png";
import { useState } from "react";
import Works from "../../HowItWorksData";
const INeedACar = () => {
  const [howItWorks, setHowItWorks] = useState(Works);

  return (
    <>
      <div className="need-car-flex">
        {howItWorks.map((needacar) => {
          const {id, title, desc, image} = needacar;
          return (
            <div className="need-car-left-container" key={id}>
              <div className="need-car-left-content">
                <div className="left-content-left-img">
                  <img src={image} alt={image} />
                </div>
                <div className="left-content-right">
                  <div className="left-content-right-title">
                    <h4>{title}</h4>
                  </div>
                  <div className="left-content-right-desc">
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="need-car-right">
          <img src={Jeep} alt="" className="need-car-right-img" />
        </div>
      </div>
    </>
  );
};

export default INeedACar;
