import "./dawnload.css"
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
              <button className="app-store-left">
                <div className="app-store-left-content-one"></div>
                <div className="app-store-left-content-two"></div>
              </button>
              <button className="app-store-right">
                <div className="app-store-right-content-one"></div>
                <div className="app-store-right-content-two"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default DownloadApp;