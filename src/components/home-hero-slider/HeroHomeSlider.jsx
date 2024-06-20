import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroHomeSlider() {
  function doAnimations(elements) {
    var animationEndEvents =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data("delay");
      var $animationType = "animated " + $this.data("animation");
      $this.css({
        "animation-delay": $animationDelay,
        "-webkit-animation-delay": $animationDelay,
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }
  function handleBeforeChange(currentSlide, nextSlide) {
    var $animatingElements = $(
      '.slick-slide[data-index="' + nextSlide + '"]'
    ).find("[data-animation]");
    doAnimations($animatingElements);
  }
  function handleInit(e, slick) {
    var $firstAnimatingElements = $(".single-slider:first-child").find(
      "[data-animation]"
    );
    doAnimations($firstAnimatingElements);
  }
  const settings = {
    fade: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-area wow fadeIn" data-wow-delay="0.1s">
      <Slider
        {...settings}
        onInit={handleInit}
        beforeChange={handleBeforeChange}
      >
        {/* =============== */}
        {/* Slider Single */}
        {/* =============== */}
        <div className="single-slider d-flex align-items-center slider-height">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-8 col-md-10 ">
                <div className="hero-wrapper">
                  <div className="hero__caption">
                    <h1 data-animation="fadeInUp" data-delay=".3s">
                      Empowering Growers with Technology
                    </h1>
                    <p data-animation="fadeInUp" data-delay=".6s">
                     Spotting Disease at First Sight <br />
                     
                    </p>
                    <a
                      href="#detect"
                      className="btn"
                      data-animation="fadeInLeft"
                      data-delay=".3s"
                    >
                      Take a Service
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =============== */}
        {/* Slider Single */}
        {/* =============== */}
        <div className="single-slider d-flex align-items-center slider-height">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-8 col-md-10 ">
                <div className="hero-wrapper">
                  <div className="hero__caption">
                    <h1 data-animation="fadeInUp" data-delay=".3s">
                      Health is wealth keep it healthy
                    </h1>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      Ripe and Ready:
                      <br />
                      The Grape Detection System Advantage
                    </p>
                    <a
                      href="#detect"
                      className="btn"
                      data-animation="fadeInLeft"
                      data-delay=".3s"
                    >
                      Take a Service
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HeroHomeSlider;
