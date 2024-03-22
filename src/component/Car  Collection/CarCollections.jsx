import Speedometer from "../../images/speedometer-01.png";
import ManualGearBox from "../../images/manual-gearbox.png";
import Users from "../../images/users-01.png";
import FuelPomp from "../../images/gas-station.png";
import * as FaIcon  from "react-icons/fa6";
const CarCollections = ({ carsdata }) => {
  return (
    <>
      <div className="car-card-container">
        {carsdata.map((carsdata) => {
          const { id, title, price, image } = carsdata;
          return (
            <article key={id} className="car-card">
              <img src={image} alt="" />
              <div className="card-title-container">
                <div className="card-title">
                  <p>{title}</p>
                </div>
                <div className="price-container">
                  <h4 className="price">
                    {price}
                    <span>/day</span>
                  </h4>
                </div>
                <div className="car-features-main-container">
                  <div className="car-features-flex-container">
                    <div className="feature">
                      <img src={Speedometer} alt="Speedo meter" />
                      <span>4,000</span>
                    </div>
                    <div className="feature">
                      <img src={ManualGearBox} alt="Manual gear box" />
                      <span>Auto</span>
                    </div>
                    <div className="feature">
                      <img src={Users} alt="Users" />
                      <span>4 Person</span>
                    </div>
                    <div className="feature">
                      <img src={FuelPomp} alt="Fuel pomp" />
                      <span>Electric</span>
                    </div>
                  </div>
                </div>

                <div className="car-card-btn">
                  <button className="card-btn">Rent Now</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="see-all-cars">
        <button className="see-all-cars-btn">See all Cars</button>
        <FaIcon.FaArrowRight className="arrow-icon"/>
      </div>
    </>
  );
};

export default CarCollections;
