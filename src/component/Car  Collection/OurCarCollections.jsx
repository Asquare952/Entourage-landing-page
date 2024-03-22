import "./collection.css";
import { useState } from "react";
import CarCollections  from "./CarCollections";
import carsdata from "../../CarCollectionData";
// import Collections from "./Collections";
const OurCarCollections = () => {
  const [cars, setCars] = useState(carsdata);
  // const [collections, setCollections] = useState(allCollections);
  return (
    <>
      <section className="car-collection-main-container">
        <div className="car-collection-sub-container">
          <div className="car-collection-header">
            <div className="car-collection-title">
              <h4>Our Impressive Collection of Cars</h4>
            </div>
            <div className="car-collection-description">
              <p>
                Ranging from elegant sedans to powerful sports cars, all
                carefully selected to provide our customers with the ultimate
                driving experience from our Top dealers.
              </p>
            </div>
          </div>
          <div className="collection-filter-container">
            <nav className="collection-filter-btns">
              <button className="filter-btn active">Popular Car</button>
              <button className="filter-btn">Luxury Car</button>
              <button className="filter-btn">Executive Car</button>
              <button className="filter-btn">Premium Car</button>
            </nav>
          </div>
          <CarCollections carsdata={cars}/>
        </div>
      </section>
    </>
  );
};

export default OurCarCollections;