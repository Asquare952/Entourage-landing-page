import "./form.css"
import * as IoIcons from "react-icons/io5";
// import LocationIcon from "../../assets/Location.png"
const Form = () => {
  return (
    <>
      <section className="form-container">
        <form>
          <div className="inputs">
            <label for="pick-up location">Pick-up Location</label>
            <IoIcons.IoLocationOutline className="locaionIcon" />
            <input
              type="Search"
              placeholder="Search a location"
              className="search-input"
            />
          </div>
          <div className="inputs">
            <label for="pick-up Date">Pick-up Date</label>
            <input type="date" className="date-input" />
          </div>
          <div className="inputs">
            <label for="Drop-off Location">Drop-off Location</label>
            <IoIcons.IoLocationOutline className="locaionIcon" />
            <input
              type="Search"
              placeholder="Search a location"
              className="search-input"
            />
          </div>
          <div className="inputs">
            <label for="drop-off date">Drop-off Date</label>
            <input type="date" className="date-input" />
          </div>
        </form>
      </section>
    </>
  );
}
 
export default Form;