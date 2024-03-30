import * as FaIcon from "react-icons/fa";
const NextArrow = ({ onClick }) => {
  return (
    <>
      <button className="next-arrow" onClick={onClick} >
        <FaIcon.FaArrowRight className="arr" />
      </button>
    </>
  );
};

export default NextArrow;
