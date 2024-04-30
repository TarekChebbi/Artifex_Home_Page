import React from "react";
import Slider from "react-slick";
import "./index.css";

import Slide1 from "../../../assets/images/slider1.png";
import Slide2 from "../../../assets/images/slider2.png";
import Slide3 from "../../../assets/images/slider3.png";
import Slide4 from "../../../assets/images/slider4.png";
import Slide5 from "../../../assets/images/slider5.png";
import Slide6 from "../../../assets/images/slider6.png";
import Slide7 from "../../../assets/images/slider7.png";

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: window.innerWidth > 992 ? true : false,
    autoplay: true,
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img src={Slide1} className="w-100" />
            <div className="info">
              <h2 class="mb-4">
                Discover And Support
                <br />
                Talented Artists on <br />
                Artifex
              </h2>
              <p>
                Artifex is a vibrant artist marketplace where creativity thrives
              </p>{" "}
              <br />
              <p>and community connects.</p>
            </div>
          </div>
          <div className="item">
            <img src={Slide2} className="w-100" />
            <div className="info">
              <h2 class="mb-4">
                Discover And Support
                <br />
                Talented Artists on <br />
                Artifex
              </h2>
              <p>
                Artifex is a vibrant artist marketplace where creativity thrives
              </p>{" "}
              <br />
              <p>and community connects.</p>
            </div>
          </div>
          <div className="item">
            <img src={Slide3} className="w-100" />
            <div className="info">
              <h2 class="mb-4">
                Discover And Support
                <br />
                Talented Artists on <br />
                Artifex
              </h2>
              <p>
                Artifex is a vibrant artist marketplace where creativity thrives
              </p>{" "}
              <br />
              <p>and community connects.</p>
            </div>
          </div>
          <div className="item">
            <img src={Slide4} className="w-100" />
            <div className="info">
              <h2 class="mb-4">
                Discover And Support
                <br />
                Talented Artists on <br />
                Artifex
              </h2>
              <p>
                Artifex is a vibrant artist marketplace where creativity thrives
              </p>{" "}
              <br />
              <p>and community connects.</p>
            </div>
          </div>
          <div className="item">
            <img src={Slide5} className="w-100" />
            <div className="info">
              <h2 class="mb-4">
                Discover And Support
                <br />
                Talented Artists on <br />
                Artifex
              </h2>
              <p>
                Artifex is a vibrant artist marketplace where creativity thrives
              </p>{" "}
              <br />
              <p>and community connects.</p>
            </div>
          </div>
          <div className="item">
            <img src={Slide6} className="w-100" />
            <div className="info">
              <h2 class="mb-4">
                Discover And Support
                <br />
                Talented Artists on <br />
                Artifex
              </h2>
              <p>
                Artifex is a vibrant artist marketplace where creativity thrives
              </p>{" "}
              <br />
              <p>and community connects.</p>
            </div>
          </div>
          <div className="item">
            <img src={Slide7} className="w-100" />
            <div className="info">
              <h2 class="mb-4">
                Discover And Support
                <br />
                Talented Artists on <br />
                Artifex
              </h2>
              <p>
                Artifex is a vibrant artist marketplace where creativity thrives
              </p>{" "}
              <br />
              <p>and community connects.</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
