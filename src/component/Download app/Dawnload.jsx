import "./dawnload.css";
import AppStoreImg from '../../images/App Store.png';
import PlayStoreImg from "../../images/Play Store.png";
import AppleIcon from "../../images/apple icon.png";
import PlaystoreIcon from "../../images/playstore icon.png";
const DownloadApp = () => {
  return (
    <>
      <section className="download-main-container">
        <div className="download-sub-container">
          <div className="download-contents">
            <div className="download-left">
              <div className="download-title">
                <h4>Download our mobile app ⚡️</h4>
              </div>
              <div className="download-desc">
                <p>
                  Get exclusive access to car rentals with our mobile app.
                  Download now and experience convenience on the go.
                </p>
              </div>
            </div>
            <div className="download-right">
              <button className="app-store store">
                <img src={AppStoreImg} alt="" />
                {/* <div className="apple"></div>
                <div className="app-store-content"></div> */}
              </button>
              <button className="play-store store">
                <img src={PlayStoreImg} alt="" />
                {/* <div className="app-store-right-content-one"></div>
                <div className="app-store-right-content-two"></div> */}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadApp;
