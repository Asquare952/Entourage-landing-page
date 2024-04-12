import "./collection.css";
import { useState } from "react";
import CarCollections from "./CarCollections";
import carsdata from "../../utils/CarCollectionData";
import Collections from "./Collections";
const allCollections = [
  ...new Set(carsdata.map((car) => car.collection)),
];
const OurCarCollections = () => {
  const [collectionItems, setCollectionItems] = useState(carsdata);
  const [collections, setCollections] = useState(allCollections);
  const filterCollections = (collection) => {
    if (collection) {
      setCollectionItems(carsdata);
      return;
    }
    const newItems = carsdata.filter((car) => car.collection === collection);
    setCollectionItems(newItems);
  };
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
          <Collections collections={collections} filterCollections={filterCollections}/>
          <CarCollections carsdata={collectionItems} />
        </div>
      </section>
    </>
  );
};

export default OurCarCollections;
