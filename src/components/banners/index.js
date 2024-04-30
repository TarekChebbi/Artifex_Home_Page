import React from "react";
import icon1 from "../../assets/images/community.svg";
import icon2 from "../../assets/images/transaction.svg";
import icon3 from "../../assets/images/event.svg";

import "./style.css";

const Banners = () => {
  return (
    <div className="bannerSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box">
              <aside className="responsive-banner1">
                <div className="container-envelope1">
                  <img src={icon1} className="icon-img" alt=''/>
                  <p className="special-paragraph">
                    Live Sites using our WordPress Themes
                  </p>
                </div>
              </aside>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <aside className="responsive-banner2">
                <div className="container-envelope1">
                  <img src={icon2} className="icon-img" alt=''/>
                  <p className="special-paragraph">
                    Live Sites using our WordPress Themes
                  </p>
                </div>
              </aside>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <aside className="responsive-banner1">
                <div className="container-envelope1">
                  <img src={icon3} className="icon-img" alt=''/>
                  <p className="special-paragraph">
                    Live Sites using our WordPress Themes
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
