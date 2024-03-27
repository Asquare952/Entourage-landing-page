import "./form.css"
import * as IoIcons from "react-icons/io5";
import ArrowRight from "../../assets/right arrow.png"
const Form = () => {
  return (
    <>
      <section className="form-container">
        <div className="form-sub-container">
          <div className="form-sub-content">
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
              {/* <div className="form-btn">
                <button>
                  Find a Vehicle
                  <img src={ArrowRight} alt="" />
                </button>
              </div> */}
            </form>
            <div className="form-btn">
              <button>
                Find a Vehicle
                <img src={ArrowRight} alt="" />
              </button>
            </div>
          </div>
          {/* <form>
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
            <div className="form-btn">
              <button>
                Find a Vehicle
                <img src={ArrowRight} alt="" />
              </button>
            </div>
          </form> */}
        </div>
      </section>
    </>
  );
}
 
export default Form;