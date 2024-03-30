import * as FaIcon from "react-icons/fa";
const PrevArrow = ({ onClick }) => {
  return (
    <>
      <button className="prev-arrow" onClick={onClick}>
        <FaIcon.FaArrowLeft className="arr" />
      </button>
    </>
  );
};

export default PrevArrow;
