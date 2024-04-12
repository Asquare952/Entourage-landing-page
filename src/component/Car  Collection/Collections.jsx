const Collections = ({ collections, filterCollections }) => {
  return (
    <>
      <div className="btn-container">
        {collections.map((collection, index) => {
          return (
            <button
              key={index}
              className="filter-btn active"
              onClick={() => filterCollections(collection)}
            >
              {collection}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Collections;
