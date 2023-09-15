import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const array = [1, 2, 3, 4, 5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,

    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings} className="slider">
        {array.map((e) => (
          <div key={e} className="hero-container">
            <div className="herolefttext">
              <h1>Spicy delicious chicken wings</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim
              </p>
              <button className="blackbg">
                <div className="viewrecipe">
                  <div className="textrecipeban">
                    <h3>View Recipe</h3>
                  </div>
                  <div className="iconban">
                    <img src={"/Assets/play3.png"} />
                  </div>
                </div>
              </button>
            </div>
            <div className="herorightimage">
              <img src={"/Assets/baked-chicken.png"} alt="baked chicken" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
